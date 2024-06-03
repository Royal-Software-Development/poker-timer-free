import FormField from "./FormField"

const ActionValueForm = () => {
  return (
    <section className="flex flex-col bg-[#151515] w-full gap-2 rounded-3xl px-10 py-6">
      <h4 className="font-bold text-base">Set the value of each action</h4>
      <div className="flex gap-2">
        <FormField variant="value" label="Buy-in" onChange={() => console.log("oi")} />
        <FormField variant="chips" onChange={() => console.log("oi")} />
      </div>
      <div className="flex gap-2">
        <FormField variant="value" label="Buy-in (D)" onChange={() => console.log("oi")} />
        <FormField variant="chips" onChange={() => console.log("oi")} />
      </div>
      <div className="flex gap-2">
        <FormField variant="value" label="Rebuy" onChange={() => console.log("oi")} />
        <FormField variant="chips" onChange={() => console.log("oi")} />
      </div>
      <div className="flex gap-2">
        <FormField variant="value" label="Rebuy (D)" onChange={() => console.log("oi")} />
        <FormField variant="chips" onChange={() => console.log("oi")} />
      </div>
      <div className="flex gap-2">
        <FormField variant="value" label="Add on" onChange={() => console.log("oi")} />
        <FormField variant="chips" onChange={() => console.log("oi")} />
      </div>
    </section>
  )
}

export default ActionValueForm
