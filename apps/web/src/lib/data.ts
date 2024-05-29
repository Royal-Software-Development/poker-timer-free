import { Blinds } from "../types/blinds";

export const getCorrectLevelIndex = (
  blinds: Blinds[],
  levelIndex: number,
): number => {
  const levelsUntilIndex = blinds.slice(0, levelIndex);
  const breaksUntilIndex = levelsUntilIndex.filter((blind) => blind.break);
  const qtyOfBreaksUntilIndex = breaksUntilIndex.length;
  const correctedIndex = levelIndex - qtyOfBreaksUntilIndex + 1;
  return correctedIndex;
};
