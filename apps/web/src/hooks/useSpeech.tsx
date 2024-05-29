import { useEffect, useState } from "react";

import { PlayingState, createSpeechEngine } from "./speech";

/*
  @description
  Implement a custom useSpeech hook that uses a speech engine defined in 'speech.ts'
  to play the sentences that have been fetched and parsed previously.

  This hook should return react friendly controls for playing, and pausing audio as well as provide information about
  the currently read word and sentence
*/
const useSpeech = (sentences: Array<string>) => {
  const [currentSentenceIdx, setCurrentSentenceIdx] = useState(0);
  const [currentWordRange, setCurrentWordRange] = useState([0, 0]);
  const [playbackState, setPlaybackState] = useState<PlayingState>("paused");

  useEffect(() => {
    const hasSentence = sentences[currentSentenceIdx];
    if (!hasSentence) {
      setCurrentSentenceIdx(0);
      load(sentences[currentSentenceIdx]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSentenceIdx]);

  const { load, play, pause } = createSpeechEngine({
    onBoundary: (e) =>
      setCurrentWordRange([e.charIndex, e.charIndex + e.charLength]),
    onEnd: () => setCurrentSentenceIdx((prev) => prev + 1),
    onStateUpdate: (e) => setPlaybackState(e),
  });

  const playSpeech = () => {
    load(sentences[currentSentenceIdx]);
    play();
  };

  const pauseSpeech = () => {
    pause();
  };

  return {
    currentSentenceIdx,
    currentWordRange,
    playbackState,
    setCurrentSentenceIdx,
    playSpeech,
    pauseSpeech,
  };
};

export { useSpeech };
