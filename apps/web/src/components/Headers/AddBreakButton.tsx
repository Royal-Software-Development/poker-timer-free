import { Ban } from "lucide-react";

import useAddTournamentLevel from "../../hooks/useAddTournamentLevel";
import { useSpeech } from "../../hooks/useSpeech";

const AddBreakButton = () => {
  const addLevel = useAddTournamentLevel();
  const { playSpeech } = useSpeech(["Adicionado novo break"]);

  const onClick = () => {
    addLevel(true);
    playSpeech();
  };

  return (
    <button onClick={onClick} title="Add a new break.">
      <Ban />
    </button>
  );
};

export default AddBreakButton;
