import { useAtom } from "jotai"
import FormField from "./FormField"
import { eliminationsCounter, totalPlayersCounter } from "../../lib/atoms"
import { ChangeEvent, useCallback } from "react"
import { ensureNonNegativeValue } from "@poker-time/utils/number"

const PlayersInForm = () => {
  const [totalPlayers, setUniquePlayersIn] = useAtom(totalPlayersCounter)
  const [eliminations, setEliminations] = useAtom(eliminationsCounter)

  const handleCounterChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, setValue: (value: number) => void) => {
      setValue(ensureNonNegativeValue(e.target.value));
    },
    []
  );

  return (
    <section className="flex flex-col bg-[#151515] w-full gap-2 rounded-3xl px-10 py-6">
      <h4 className="font-bold text-base">Players Counter</h4>
      <FormField variant="counter" label="Total" value={totalPlayers} onChange={(e) => handleCounterChange(e, setUniquePlayersIn)} />
      <FormField variant="counter" label="Eliminations" value={eliminations} onChange={(e) => handleCounterChange(e, setEliminations)} />
    </section>
  )
}

export default PlayersInForm
