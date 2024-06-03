import { PlusCircle } from "lucide-react"
import FormField from "./FormField"
import IconButton from "./IconButton"

const PrizeForm = () => {
  return (
    <section className="flex flex-col bg-[#151515] w-full gap-2 rounded-3xl px-10 py-6">
      <div className="flex justify-between items-end">
        <h4 className="font-bold text-base">Prize</h4>
        <IconButton variant="neutral" icon={<PlusCircle size={30} color="black" />} />
      </div>
      <FormField variant="value" label="1º" />
      <FormField variant="value" label="2º" />
      <FormField variant="value" label="3º" />
    </section>
  )
}

export default PrizeForm
