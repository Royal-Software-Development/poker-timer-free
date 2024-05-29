import { useSetAtom } from "jotai";
import { tournamentAtom } from "../../lib/atoms";
import { Tournament } from "../../types/structure";
import { useCallback } from "react";
import { X } from "lucide-react";
import { useSpeech } from "../../hooks/useSpeech";

interface Props {
  index: number;
  speechMessage: string;
}

const RemoveLevel = ({ index, speechMessage }: Props) => {
  const setTournament = useSetAtom(tournamentAtom);
  const { playSpeech } = useSpeech([speechMessage]);

  const removeLevel = useCallback(() => {
    setTournament((prevTournament: Tournament) => {
      const updatedBlinds = [...prevTournament.blinds];
      updatedBlinds.splice(index, 1);
      const updatedTournament = { ...prevTournament, blinds: updatedBlinds };
      return updatedTournament;
    });
    playSpeech();
  }, [index, playSpeech, setTournament]);

  return (
    <button onClick={removeLevel} title={"Remove"}>
      <X />
    </button>
  );
};

export default RemoveLevel;
