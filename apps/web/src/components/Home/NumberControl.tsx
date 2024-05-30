import { CircleMinus, CirclePlus } from "lucide-react";
import { useSpeech } from "../../hooks/useSpeech";

interface Props {
  value: number;
  onChange: (value: number) => void;
  speechMessage: string;
}

const NumberControl = ({ value, onChange, speechMessage }: Props) => {
  const { playSpeech } = useSpeech([speechMessage]);

  const onPlus = () => {
    onChange(value + 50);
    playSpeech();
  };
  const onMinus = () => {
    const newValue = Math.max(value - 50, 50);
    const isSameValue = newValue === value;
    onChange(newValue);
    if (!isSameValue) {
      playSpeech();
    }
  };

  return (
    <div className="flex items-center gap-3">
      <p className="text-base text-neutral-400">{value}</p>
      <div className="flex flex-col gap-3">
        <button onClick={onPlus} className="text-lime-500">
          <CirclePlus />
        </button>
        <button onClick={onMinus} className="text-red-500">
          <CircleMinus />
        </button>
      </div>
    </div>
  );
};

export default NumberControl;
