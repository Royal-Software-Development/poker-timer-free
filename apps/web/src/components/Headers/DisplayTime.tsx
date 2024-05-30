import { useAtomValue } from "jotai";
import { formatTimer } from "@poker-time/utils/time";

import { Time, timeAtom } from "../../lib/atoms";

const DisplayTime = () => {
  const time = useAtomValue<Time>(timeAtom);

  return (
    <div className="w-28 rounded-xl bg-neutral-900 px-3 py-2">
      <p className="text-center text-sm sm:text-base">{formatTimer(time)}</p>
    </div>
  );
};

export default DisplayTime;
