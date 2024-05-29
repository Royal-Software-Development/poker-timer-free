import { useAtomValue } from "jotai";
import { currentBlindReadOnlyAtom, levelAtom } from "../../lib/atoms";

const LEVEL_PREFIX = "LEVEL";

const StepCard = () => {
  const level = useAtomValue(levelAtom);
  const currentBlind = useAtomValue(currentBlindReadOnlyAtom);

  return (
    <div className="flex flex-col items-center justify-center gap-1.5 rounded-3xl bg-neutral-800 px-8 py-2">
      {currentBlind.break ? (
        <p className="text-center text-xl font-bold text-neutral-50">{`BREAK`}</p>
      ) : (
        <>
          <p className="text-center text-xl font-bold text-neutral-50">
            {LEVEL_PREFIX}
          </p>
          <hr className="w-full" />
          <p className="text-center text-2xl font-bold text-neutral-50">
            {level + 1}
          </p>
        </>
      )}
    </div>
  );
};

export default StepCard;
