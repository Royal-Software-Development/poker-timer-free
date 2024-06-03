import FormField from "./FormField"

const ActionCounterForm = () => {
  return (
    <section className="flex flex-col bg-[#151515] w-full gap-2 rounded-3xl px-10 py-6">
      <h4 className="font-bold text-base">Actions Counter</h4>
      <FormField variant="counter" label="Buy-in" />
      <FormField variant="counter" label="Buy in (D)" />
      <FormField variant="counter" label="Rebuy" />
      <FormField variant="counter" label="Rebuy (D)" />
      <FormField variant="counter" label="Add on" />
    </section>
  )
}

export default ActionCounterForm
