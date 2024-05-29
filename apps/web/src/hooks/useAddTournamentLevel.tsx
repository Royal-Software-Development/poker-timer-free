import { useSetAtom } from "jotai";
import { tournamentAtom } from "../lib/atoms";
import { useCallback } from "react";
import { Tournament } from "../types/structure";
import { Blinds } from "../types/blinds";

const useAddTournamentLevel = () => {
  const setTournament = useSetAtom(tournamentAtom);

  const addLevel = useCallback(
    (breakLevel = false) => {
      setTournament((prevTournament: Tournament) => {
        const fallbackLevel = {
          small: 50,
          big: 100,
          time: 15,
          break: false,
        };
        const onlyLevels = prevTournament.blinds.filter(
          (blind) => !blind.break,
        );
        const lastLevel = onlyLevels?.at(-1) || fallbackLevel;
        const newLevel: Blinds = breakLevel
          ? { small: 0, big: 0, time: 15, break: true }
          : { ...lastLevel, break: false };
        const updatedBlinds = [...prevTournament.blinds, newLevel];

        return { ...prevTournament, blinds: updatedBlinds };
      });
    },
    [setTournament],
  );

  return addLevel;
};

export default useAddTournamentLevel;
