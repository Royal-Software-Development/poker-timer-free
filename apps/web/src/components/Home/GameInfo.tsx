import { useAtomValue } from "jotai";
import { blindsReadOnlyAtom } from "../../lib/atoms";
import LevelRow from "./LevelRow";
import GameInfoHeader from "./GameInfoHeader";

const GameInfo = () => {
  const blinds = useAtomValue(blindsReadOnlyAtom);

  return (
    <main className="flex flex-col gap-10 pb-10">
      <GameInfoHeader />
      <div className="mx-auto w-[1150px]">
        <ul className="flex w-full flex-col items-center gap-10">
          {blinds.map((blind, index) => (
            <LevelRow key={index} blind={blind} index={index} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default GameInfo;
