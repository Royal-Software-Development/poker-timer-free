import { MinusCircle, PlusCircle } from "lucide-react"
import { FieldProps } from "../../types/field"
import IconButton from "./IconButton"

const CounterField = ({ label, ...props }: FieldProps) => {
  return (
    <div className="flex gap-2 w-full" >
      <div className="flex justify-center bg-[#1e1e1e] px-6 py-3 rounded-lg w-full max-w-[132px]">{`${label}`}:</div>
      <IconButton variant="green" icon={<PlusCircle size={30} />} />
      <IconButton variant="red" icon={<MinusCircle size={30} />} />
      <input className="bg-[#1e1e1e] text-center rounded-lg max-w-[132px] w-full" type="number" value={0} {...props} />
    </div >
  )
}

export default CounterField
