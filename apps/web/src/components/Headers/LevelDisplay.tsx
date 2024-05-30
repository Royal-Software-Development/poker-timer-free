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
    <div className="w-28 rounded-xl bg-neutral-900 px-3 py-2">
      <p className="text-center text-sm uppercase sm:text-base">
        {isBreak ? "BREAK" : `lvl ${correctedIndex}`}
      </p>
    </div>
  );
};

export default LevelDisplay;
