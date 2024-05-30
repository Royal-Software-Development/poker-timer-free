import AddBreakButton from "./AddBreakButton";
import AddLevelButton from "./AddLevelButton";
import DisplayTime from "./DisplayTime";
import LevelDisplay from "./LevelDisplay";
import TimerLink from "./TimerLink";
import TogglePlay from "./TogglePlay";

const Controls = () => {
  return (
    <div className="flex items-center gap-5 rounded-xl bg-neutral-800 px-10 py-3">
      <TimerLink />
      <TogglePlay />
      <DisplayTime />
      <LevelDisplay />
      <AddLevelButton />
      <AddBreakButton />
    </div>
  );
};

export default Controls;
