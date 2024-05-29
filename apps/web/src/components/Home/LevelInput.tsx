import { ChangeEvent, useCallback } from "react";
import { ensureNonNegativeValue } from "@poker-time/utils/number";
import { useSpeech } from "../../hooks/useSpeech";

type LevelInputProps = {
  value: number | undefined;
  onChange: (value: number) => void;
  speechMessage: string;
};

const LevelInput = ({ value, onChange, speechMessage }: LevelInputProps) => {
  const { playSpeech } = useSpeech([speechMessage]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(ensureNonNegativeValue(e.target.value));
    },
    [onChange],
  );

  return (
    <div className="flex justify-center">
      <input
        className="w-full bg-transparent text-center text-xs sm:text-base"
        type="number"
        value={value || ""}
        onChange={handleChange}
        onBlur={playSpeech}
      />
    </div>
  );
};

export default LevelInput;
