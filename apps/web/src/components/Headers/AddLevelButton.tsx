import { CirclePlus } from "lucide-react";

import useAddTournamentLevel from "../../hooks/useAddTournamentLevel";
import { useSpeech } from "../../hooks/useSpeech";

const AddLevelButton = () => {
  const addLevel = useAddTournamentLevel();
  const { playSpeech } = useSpeech(["Adicionado novo level"]);

  const onClick = () => {
    addLevel(false);
    playSpeech();
  };

  return (
    <button onClick={onClick} title="Add a new level.">
      <CirclePlus />
    </button>
  );
};

export default AddLevelButton;
