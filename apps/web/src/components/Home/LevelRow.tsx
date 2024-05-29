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
    <tr>
      <td className="px-4 py-2 ">
        <DisplayId blind={blind} index={index} />
      </td>
      <td className="px-4 py-2">
        <LevelInput
          value={blind.small}
          onChange={handleChange("small")}
          speechMessage={speechMessageSmall}
        />
      </td>
      <td className="px-4 py-2">
        <LevelInput
          value={blind.big}
          onChange={handleChange("big")}
          speechMessage={speechMessageBig}
        />
      </td>
      <td className="px-4 py-2">
        <div className="flex justify-center text-xs sm:text-base">
          {blind.big}
        </div>
      </td>
      <td className="px-4 py-2">
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
      </td>
      <td className="px-4 py-2">
        <div className="flex justify-center">
          <StartLevel index={index} speechMessage={speechMessageStart} />
        </div>
      </td>
      <td className="px-4 py-2">
        <div className="flex justify-center">
          <RemoveLevel index={index} speechMessage={speechMessageRemove} />
        </div>
      </td>
    </tr>
  );
};

export default LevelRow;
