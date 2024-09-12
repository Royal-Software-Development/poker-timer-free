import { cn } from "../../lib/cn"
import { FieldProps } from "../../types/field"

const ChipsField = ({ value, placeholder, ...props }: FieldProps) => {
  return (
    <input
      value={value === 0 ? "" : value}
      className={cn("bg-[#1e1e1e] text-end rounded-lg pr-2", props.className)}
      type="number"
      placeholder={placeholder || "Type chips amount"}
      {...props}
    />
  )
}

export default ChipsField
