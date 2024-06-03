import { cn } from "../../lib/cn";
import { FieldProps } from "../../types/field";

const ValueField = ({ label, value, className, placeholder, ...props }: FieldProps) => {
  return (
    <div className="flex gap-2 w-full">
      <div className="flex justify-center bg-[#1e1e1e] px-6 py-3 rounded-lg w-full max-w-[132px]">
        {label}
      </div>
      <input
        value={value === 0 ? "" : value}
        className={cn("bg-[#1e1e1e] text-end rounded-lg w-full pr-2", className)}
        type="number"
        placeholder={placeholder || "Type the value"}
        {...props}
      />
    </div>
  );
};

export default ValueField;
