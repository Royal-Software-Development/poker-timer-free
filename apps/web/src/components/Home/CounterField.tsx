import { MinusCircle, PlusCircle } from "lucide-react";
import { FieldProps } from "../../types/field";
import IconButton from "./IconButton";
import { cn } from "../../lib/cn";
import { ChangeEvent } from "react";

const CounterField = ({ label, value, onChange, ...props }: FieldProps) => {
  const handleIncrement = () => {
    onChange({ target: { value: (Number(value) + 1).toString() } } as ChangeEvent<HTMLInputElement>);
  };

  const handleDecrement = () => {
    if (Number(value) > 0) {
      onChange({ target: { value: (Number(value) - 1).toString() } } as ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <div className="flex gap-2">
      <div className="flex justify-center bg-[#1e1e1e] px-6 py-3 rounded-lg w-full max-w-[132px]">
        {`${label}`}
      </div>
      <IconButton variant="green" icon={<PlusCircle size={30} />} onClick={handleIncrement} />
      <IconButton variant="red" icon={<MinusCircle size={30} />} onClick={handleDecrement} />
      <input
        className={cn("bg-[#1e1e1e] text-center rounded-lg w-full", props.className)}
        type="number"
        value={value === 0 ? "" : value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default CounterField;
