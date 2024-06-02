import FormField from "./FormField"

const ActionValueForm = () => {
  return (
    <section className="flex flex-col bg-[#151515] w-full gap-2 rounded-3xl px-12 py-8">
      <h4 className="font-bold text-base">Set the value of each action</h4>
      <FormField variant="value" label="Buy-in" onChange={() => console.log("oi")} />
      <FormField variant="value" label="Buy in (D)" onChange={() => console.log("oi")} />
      <FormField variant="value" label="Rebuy" onChange={() => console.log("oi")} />
      <FormField variant="value" label="Rebuy (D)" onChange={() => console.log("oi")} />
      <FormField variant="value" label="Addon" onChange={() => console.log("oi")} />
    </section>
  )
}

export default ActionValueForm
