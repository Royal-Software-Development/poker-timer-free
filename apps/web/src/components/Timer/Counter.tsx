import { formatTimer } from "@poker-time/utils/time";
import { useAtomValue } from "jotai";
import { timeAtom } from "../../lib/atoms";

const Counter = () => {
  const time = useAtomValue(timeAtom);

  return (
    <h3 className="md:text-10xl leading-negative-1 my-auto w-fit self-center border-b text-center text-9xl font-bold tabular-nums">
      {formatTimer(time)}
    </h3>
  );
};

export default Counter;
