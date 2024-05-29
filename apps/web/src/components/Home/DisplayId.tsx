import { useAtomValue } from "jotai";
import { blindsReadOnlyAtom } from "../../lib/atoms";
import { Blinds } from "../../types/blinds";
import { getCorrectLevelIndex } from "../../lib/data";

interface Props {
  blind: Blinds;
  index: number;
}

const DisplayId = ({ blind, index }: Props) => {
  const blinds = useAtomValue(blindsReadOnlyAtom);
  const correctedIndex = getCorrectLevelIndex(blinds, index);

  return (
    <div className="flex justify-center text-xs sm:text-base">
      {blind.break ? "BREAK" : correctedIndex}
    </div>
  );
};

export default DisplayId;
