import { useAtom } from "jotai";
import FormField from "./FormField";
import { ChangeEvent, useCallback } from "react";
import { ensureNonNegativeValue } from "@poker-time/utils/number";
import {
  counterOfAddon,
  counterOfBuyIn,
  counterOfChipTime,
  counterOfDoubleBuyIn,
  counterOfDoubleRebuy,
  counterOfRebuy,
} from "../../lib/atoms";

interface CounterFieldProps {
  label: string;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CounterForm = () => {
  // Atom counter state hooks
  const [counterChipTime, setCounterChipTime] = useAtom(counterOfChipTime);
  const [counterBuyIn, setCounterBuyIn] = useAtom(counterOfBuyIn);
  const [counterDoubleBuyIn, setCounterDoubleBuyIn] = useAtom(counterOfDoubleBuyIn);
  const [counterRebuy, setCounterRebuy] = useAtom(counterOfRebuy);
  const [counterDoubleRebuy, setCounterDoubleRebuy] = useAtom(counterOfDoubleRebuy);
  const [counterAddOn, setCounterAddOn] = useAtom(counterOfAddon);

  const handleCounterChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, setValue: (value: number) => void) => {
      setValue(ensureNonNegativeValue(e.target.value));
    },
    []
  );

  const counterFields: Array<CounterFieldProps> = [
    { label: "Chip Time", value: counterChipTime, onChange: (e) => handleCounterChange(e, setCounterChipTime) },
    { label: "Buy-in", value: counterBuyIn, onChange: (e) => handleCounterChange(e, setCounterBuyIn) },
    { label: "Buy-in (D)", value: counterDoubleBuyIn, onChange: (e) => handleCounterChange(e, setCounterDoubleBuyIn) },
    { label: "Rebuy", value: counterRebuy, onChange: (e) => handleCounterChange(e, setCounterRebuy) },
    { label: "Rebuy (D)", value: counterDoubleRebuy, onChange: (e) => handleCounterChange(e, setCounterDoubleRebuy) },
    { label: "Add on", value: counterAddOn, onChange: (e) => handleCounterChange(e, setCounterAddOn) },
  ];

  return (
    <section className="flex flex-col bg-[#151515] w-full gap-2 rounded-3xl px-10 py-6">
      <h4 className="font-bold text-base">Actions Counter</h4>
      {counterFields.map((field, index) => (
        <FormField
          variant="counter"
          key={index}
          label={field.label}
          value={field.value}
          onChange={field.onChange}
        />
      ))}
    </section>
  );
};

export default CounterForm;
