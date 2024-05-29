import { useAtom, useAtomValue } from "jotai";
import { useCallback } from "react";
import { currentBlindReadOnlyAtom, isPlayingAtom } from "../../lib/atoms";
import { Pause, Play } from "lucide-react";
import { useSpeech } from "../../hooks/useSpeech";

const TogglePlay = () => {
  const currentBlind = useAtomValue(currentBlindReadOnlyAtom);
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom);

  const isBreak = currentBlind.break;
  const speechMessage = (() => {
    if (!isBreak && !isPlaying) {
      return "Iniciando level";
    }
    if (!isBreak && isPlaying) {
      return "Pausando level";
    }
    if (isBreak && !isPlaying) {
      return "Iniciando break";
    }
    return "Pausando break";
  })();
  const { playSpeech } = useSpeech([speechMessage]);

  const togglePlaying = useCallback(() => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    playSpeech();
  }, [playSpeech, setIsPlaying]);

  return (
    <button
      onClick={togglePlaying}
      title={isPlaying ? "Pause tournament." : "Play tournament."}
    >
      {isPlaying ? <Pause /> : <Play />}
    </button>
  );
};

export default TogglePlay;
