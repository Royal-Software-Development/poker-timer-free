import { atom } from "jotai";
import { Tournament } from "../types/structure";
import { tournaments } from "../db/tournamentsData";
import atomWithBroadcast from "./atomWithBroadcast";
import { createSpeechEngine } from "../hooks/speech";
import { getCorrectLevelIndex } from "./data";

// State tab
export type HeaderTab = "game" | "data";
export const tabAtom = atomWithBroadcast<HeaderTab>("headerTab", "game");

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
    const { load, play } = createSpeechEngine({
      onBoundary: () => null,
      onEnd: () => null,
      onStateUpdate: () => null,
    });
    const speechMessage = (() => {
      if (nextBlind.break) {
        return "Iniciando Break";
      }
      const correctedIndex = getCorrectLevelIndex(tournament.blinds, level + 1);
      return `Iniciando level ${correctedIndex}`;
    })();
    load(speechMessage);
    play();
    return;
  }

  set(timeAtom, newTime);
});

// States of actions

// Value of each action
export const valueOfBuyIn = atomWithBroadcast<number>("buyin-value", 0);
export const valueOfDoubleBuyIn = atomWithBroadcast<number>("double-buyin-value", 0);
export const valueOfRebuy = atomWithBroadcast<number>("rebuy-value", 0);
export const valueOfDoubleRebuy = atomWithBroadcast<number>("double-rebuy-value", 0);
export const valueOfAddon = atomWithBroadcast<number>("addon-value", 0);
export const valueOfChipTime = atomWithBroadcast<number>("chip-time-value", 1);

// Chips amount of each action
export const chipsOfBuyIn = atomWithBroadcast<number>("buyin-chips", 0);
export const chipsOfDoubleBuyIn = atomWithBroadcast<number>("double-buyin-chips", 0);
export const chipsOfRebuy = atomWithBroadcast<number>("rebuy-chips", 0);
export const chipsOfDoubleRebuy = atomWithBroadcast<number>("double-rebuy-chips", 0);
export const chipsOfAddon = atomWithBroadcast<number>("addon-chips", 0);
export const chipsOfChipTime = atomWithBroadcast<number>("chip-time-chips", 0);

// Counter of each action
export const counterOfBuyIn = atomWithBroadcast<number>("buyin-counter", 0);
export const counterOfDoubleBuyIn = atomWithBroadcast<number>("double-buyin-counter", 0);
export const counterOfRebuy = atomWithBroadcast<number>("rebuy-counter", 0);
export const counterOfDoubleRebuy = atomWithBroadcast<number>("double-rebuy-counter", 0);
export const counterOfAddon = atomWithBroadcast<number>("addon-counter", 0);
export const counterOfChipTime = atomWithBroadcast<number>("chip-time-counter", 0);

export const currentChipCountReadOnlyAtom = atom((get) => {
  const buyInCount = get(counterOfBuyIn);
  const doubleBuyInCount = get(counterOfDoubleBuyIn);
  const chipTimeCount = get(counterOfChipTime);
  const rebuyCount = get(counterOfRebuy);
  const doubleRebuyCount = get(counterOfDoubleRebuy);
  const addOnCount = get(counterOfAddon);

  const buyInChips = get(chipsOfBuyIn);
  const doubleBuyInChips = get(chipsOfDoubleBuyIn);
  const chipTimeChips = get(chipsOfChipTime);
  const rebuyChips = get(chipsOfRebuy);
  const doubleRebuyChips = get(chipsOfDoubleRebuy);
  const addOnChips = get(chipsOfAddon);

  return ((buyInCount * buyInChips) + (doubleBuyInCount * doubleBuyInChips) + (chipTimeCount * chipTimeChips) + (rebuyCount * rebuyChips) + (doubleRebuyCount * doubleRebuyChips) + (addOnCount * addOnChips)) / 1000;
});
