import { useSetAtom } from "jotai";
import { ChevronLast } from "lucide-react";
import { useCallback } from "react";
import { levelAtom } from "../../lib/atoms";
import { useSpeech } from "../../hooks/useSpeech";

interface Props {
  index: number;
  speechMessage: string;
}

const StartLevel = ({ index, speechMessage }: Props) => {
  const setLevel = useSetAtom(levelAtom);
  const { playSpeech } = useSpeech([speechMessage]);

  const startLevel = useCallback(() => {
    playSpeech();
    setLevel(index);
  }, [index, playSpeech, setLevel]);

  return (
    <button
      onClick={startLevel}
      title={`Start level ${index + 1}`}
      className="flex size-10 items-center justify-center rounded-lg border border-white text-blue-500"
    >
      <ChevronLast />
    </button>
  );
};

export default StartLevel;
