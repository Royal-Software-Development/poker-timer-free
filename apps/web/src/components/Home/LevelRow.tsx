import { useCallback } from "react";
import { Blinds } from "../../types/blinds";
import LevelInput from "./LevelInput";
import RemoveLevel from "./RemoveLevel";
import StartLevel from "./StartLevel";
import DisplayId from "./DisplayId";
import { useAtomValue, useSetAtom } from "jotai";
import {
  blindsReadOnlyAtom,
  levelAtom,
  timeAtom,
  tournamentAtom,
} from "../../lib/atoms";
import { Tournament } from "../../types/structure";
import { getCorrectLevelIndex } from "../../lib/data";
import NumberControl from "./NumberControl";

type LevelRowProps = {
  blind: Blinds;
  index: number;
};

const LevelRow = ({ blind, index }: LevelRowProps) => {
  const setTournament = useSetAtom(tournamentAtom);
  const blinds = useAtomValue(blindsReadOnlyAtom);
  const setTime = useSetAtom(timeAtom);
  const level = useAtomValue(levelAtom);

  const isRowOfCurrentLevel = level === index;
  const isBreak = blind.break;
  const correctedIndex = getCorrectLevelIndex(blinds, index);

  const handleChange = useCallback(
    (fieldName: keyof Blinds) => (newValue: number) => {
      setTournament((prevTournament: Tournament) => {
        const updatedBlinds = [...prevTournament.blinds];
        updatedBlinds[index] = {
          ...updatedBlinds[index],
          [fieldName]: newValue,
        };
        const updatedTournament = { ...prevTournament, blinds: updatedBlinds };
        return updatedTournament;
      });
    },
    [index, setTournament],
  );

  const speechMessageLevel = isRowOfCurrentLevel
    ? "atual"
    : `${correctedIndex}`;
  const speechMessageSmall = `Atualizando small do blind do level ${speechMessageLevel}`;
  const speechMessageBig = `Atualizando big do blind do level ${speechMessageLevel}`;
  const speechMessageTime = (() => {
    if (isBreak && isRowOfCurrentLevel) {
      return "Atualizando tempo do break atual";
    }
    if (isBreak) {
      return `Atualizando tempo de um dos break`;
    }
    return `Atualizando tempo do blind do level ${isRowOfCurrentLevel ? "atual" : correctedIndex}`;
  })();
  const speechMessageStart = (() => {
    if (isBreak) {
      return "Mudando para o break";
    }
    return `Mudando para o level ${correctedIndex}`;
  })();
  const speechMessageRemove = (() => {
    if (isBreak) {
      return "Removendo break";
    }
    return `Removendo o level ${correctedIndex}`;
  })();

  return (
    <li
      className={`w-full rounded-xl bg-neutral-800 px-24 py-7 ${isRowOfCurrentLevel && "shadow shadow-green-500"}`}
    >
      <div className="flex items-center justify-between gap-7 border-b border-white pb-2">
        <DisplayId blind={blind} index={index} />
        {!isBreak && (
          <>
            <NumberControl
              value={blind.small}
              onChange={handleChange("small")}
              speechMessage={speechMessageSmall}
            />
            <NumberControl
              value={blind.big}
              onChange={handleChange("big")}
              speechMessage={speechMessageBig}
            />
            <NumberControl
              value={blind.big}
              onChange={handleChange("big")}
              speechMessage={speechMessageBig}
            />
          </>
        )}
        <LevelInput
          value={blind.time}
          onChange={(newTime) => {
            handleChange("time")(newTime);
            if (isRowOfCurrentLevel) {
              setTime({ minutes: newTime || 0, seconds: 0 });
            }
          }}
          speechMessage={speechMessageTime}
        />
        <div className="flex items-center gap-5">
          <StartLevel index={index} speechMessage={speechMessageStart} />
          <RemoveLevel index={index} speechMessage={speechMessageRemove} />
        </div>
      </div>
    </li>
  );
};

export default LevelRow;
