import FormField from "./FormField"

const ActionCounterForm = () => {
  return (
    <section className="flex flex-col bg-[#151515] w-full gap-2 rounded-3xl px-12 py-8">
      <h4 className="font-bold text-base">Actions Counter</h4>
      <FormField variant="counter" label="Buy-in" onChange={() => console.log("oi")} />
      <FormField variant="counter" label="Buy in (D)" onChange={() => console.log("oi")} />
      <FormField variant="counter" label="Rebuy" onChange={() => console.log("oi")} />
      <FormField variant="counter" label="Rebuy (D)" onChange={() => console.log("oi")} />
      <FormField variant="counter" label="Addon" onChange={() => console.log("oi")} />
    </section>
  )
}

export default ActionCounterForm
