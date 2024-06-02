import FormField from "./FormField"

const ActionValue = () => {
  return (
    <section className="flex flex-col bg-[#151515] w-full gap-2 rounded-3xl px-12 py-8">
      <h4 className="font-bold text-base">Value of each action</h4>
      <FormField variant="value" label="Buy in" onChange={() => console.log("oi")} />
      <FormField variant="counter" label="Buy in" onChange={() => console.log("oi")} />
    </section>
  )
}

export default ActionValue
