import { useAtomValue } from "jotai";
import { maxTimeReadOnlyAtom, timeAtom } from "../../lib/atoms";
import ficha from "../../assets/ficha.png";

const ProgressBar = () => {
  const time = useAtomValue(timeAtom);
  const maxTime = useAtomValue(maxTimeReadOnlyAtom);

  const progress = (() => {
    const maxTimeInSec = (maxTime || 0) * 60;
    const elapsedSeconds = maxTimeInSec - (time.minutes * 60 + time.seconds);
    return (elapsedSeconds / maxTimeInSec) * 100;
  })();

  return (
    <div className="mx-6">
      <div className="w-full overflow-hidden rounded-full border border-white">
        <div
          className="transition-width relative w-full rounded-full bg-amber-500 p-4 duration-1000"
          style={{ transform: `translateX(calc(${progress - 100}% + 32px))` }}
        >
          <img
            src={ficha}
            alt="ficha-progress"
            className="absolute right-0 top-0 size-8 transition-transform duration-1000"
            style={{ transform: `rotate(${progress * 300}deg)` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
