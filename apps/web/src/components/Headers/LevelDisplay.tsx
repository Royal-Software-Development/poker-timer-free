import { useAtomValue } from "jotai";

import {
  blindsReadOnlyAtom,
  currentBlindReadOnlyAtom,
  levelAtom,
} from "../../lib/atoms";
import { getCorrectLevelIndex } from "../../lib/data";

const LevelDisplay = () => {
  const level = useAtomValue(levelAtom);
  const blinds = useAtomValue(blindsReadOnlyAtom);
  const currentBlind = useAtomValue(currentBlindReadOnlyAtom);
  const correctedIndex = getCorrectLevelIndex(blinds, level);
  const isBreak = currentBlind.break;

  return (
    <p className="text-sm sm:text-base">
      {isBreak ? "BREAK" : `Level ${correctedIndex}`}
    </p>
  );
};

export default LevelDisplay;
