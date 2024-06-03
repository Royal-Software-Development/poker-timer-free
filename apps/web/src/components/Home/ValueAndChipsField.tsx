import { cn } from "../../lib/cn"
import { FieldProps } from "../../types/field"

const ChipsField = ({ label, ...props }: FieldProps) => {
  return (
    <input
      className={cn("bg-[#1e1e1e] text-end rounded-lg pr-2", props.className)}
      type="number"
      placeholder={props.placeholder || "Type chips amount"}
      {...props}
    />
  )
}

export default ChipsField
