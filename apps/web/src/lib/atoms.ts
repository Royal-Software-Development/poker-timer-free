import { atom } from "jotai";
import { Tournament } from "../types/structure";
import { tournaments } from "../db/tournamentsData";
import atomWithBroadcast from "./atomWithBroadcast";

// State tournament
export const tournamentAtom = atomWithBroadcast<Tournament>(
  "tournament",
  tournaments[0],
);

// Derived state
export const tournamentTitleReadOnlyAtom = atom((get) => {
  const tournament = get(tournamentAtom);
  return tournament.title;
});

// State level
const defaultLevelAtom = atom<number>(0);
const overwrittenLevelAtom = atomWithBroadcast<number | null>("level", null);
export const levelAtom = atom<number, [number], void>(
  (get) => get(overwrittenLevelAtom) || get(defaultLevelAtom),
  (get, set, level: number) => {
    const tournament = get(tournamentAtom);
    const newBlind = tournament.blinds[level];
    const newTime = {
      minutes: newBlind.time,
      seconds: 0,
    };
    set(overwrittenLevelAtom, level);
    set(timeAtom, newTime);
  },
);

// State isPlaying
export const isPlayingAtom = atomWithBroadcast<boolean>("isPlaying", false);

// Derived state maxTime
export const maxTimeReadOnlyAtom = atom<number>((get) => {
  const tournament = get(tournamentAtom);
  const level = get(levelAtom);
  return tournament.blinds[level]?.time || 0;
});

// Derived blinds
export const blindsReadOnlyAtom = atom((get) => {
  const tournament = get(tournamentAtom);
  return tournament.blinds;
});

// Derived currentBlind
export const currentBlindReadOnlyAtom = atom((get) => {
  const tournament = get(tournamentAtom);
  const level = get(levelAtom);
  return tournament.blinds[level];
});

// State time
export interface Time {
  minutes: number;
  seconds: number;
}

const defaultTimeAtom = atom<Time>((get) => ({
  minutes: get(maxTimeReadOnlyAtom) || 0,
  seconds: 0,
}));
const overwrittenTimeAtom = atomWithBroadcast<Time | null>("time", null);
export const timeAtom = atom<Time, [Time], void>(
  (get) => get(overwrittenTimeAtom) || get(defaultTimeAtom),
  (_get, set, time: Time) => set(overwrittenTimeAtom, time),
);

export const tickTimeAtom = atom(null, (get, set) => {
  const isPlaying = get(isPlayingAtom);
  if (!isPlaying) {
    return;
  }

  const level = get(levelAtom);
  const tournament = get(tournamentAtom);
  const { seconds, minutes } = get(timeAtom);
  const nextBlind = tournament.blinds[level + 1];

  const newTime = {
    minutes: seconds === 0 ? minutes - 1 : minutes,
    seconds: seconds === 0 ? 59 : seconds - 1,
  };

  if (newTime.minutes === 0 && newTime.seconds === 0 && nextBlind) {
    set(levelAtom, level + 1);
    return;
  }

  set(timeAtom, newTime);
});
