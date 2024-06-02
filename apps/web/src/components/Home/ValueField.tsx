import { FieldProps } from "../../types/field"

const ValueField = ({ label, ...props }: FieldProps) => {
  return (
    <div className="flex gap-2 w-full" >
      <div className="flex justify-center bg-[#1e1e1e] px-6 py-3 rounded-lg w-full max-w-[132px] ">{`${label}`}:</div>
      <input className=":bg-emerald-600 bg-[#1e1e1e] text-end rounded-lg w-full pr-2" type="number" placeholder="Type a value" {...props} />
    </div >
  )
}

export default ValueField
