import FormField from "./FormField"

const PlayersInForm = () => {
  return (
    <section className="flex flex-col bg-[#151515] w-full gap-2 rounded-3xl px-10 py-6">
      <h4 className="font-bold text-base">Players Counter</h4>
      <FormField variant="value" label="Total" onChange={() => console.log("oi")} />
      <FormField variant="counter" label="Eliminations" />
    </section>
  )
}

export default PlayersInForm
