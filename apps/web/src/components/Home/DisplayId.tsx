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
  const isBreak = blind.break;
  const className = isBreak ? "bg-yellow-400" : "bg-neutral-900";

  return (
    <p
      className={`flex w-28 justify-center rounded-lg px-5 py-3 text-xs uppercase text-white md:text-base ${className}`}
    >
      {isBreak ? "Break" : `Lvl ${correctedIndex}`}
    </p>
  );
};

export default DisplayId;
