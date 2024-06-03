import { useAtom } from "jotai";
import {
  chipsOfAddon,
  chipsOfBuyIn,
  chipsOfChipTime,
  chipsOfDoubleBuyIn,
  chipsOfDoubleRebuy,
  chipsOfRebuy,
  valueOfAddon,
  valueOfBuyIn,
  valueOfDoubleBuyIn,
  valueOfDoubleRebuy,
  valueOfRebuy
} from "../../lib/atoms";
import FormField from "./FormField";
import { ChangeEvent, useCallback } from "react";
import { ensureNonNegativeValue } from "@poker-time/utils/number";

interface ActionChipsFieldProps {
  label: string;
  chips: number;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  chipsOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

// Reusable component
const ActionChipsField = ({ label, value, chips, onChange, chipsOnChange }: ActionChipsFieldProps) => (
  <div className="flex gap-2">
    <FormField
      variant="value"
      label={label}
      value={value}
      onChange={onChange}
    />
    <FormField value={chips} variant="chips" onChange={chipsOnChange} />
  </div>
);

const ValueForm = () => {
  // Atom values state hooks
  const [buyIn, setBuyIn] = useAtom(valueOfBuyIn);
  const [doubleBuyIn, setDoubleBuyIn] = useAtom(valueOfDoubleBuyIn);
  const [rebuy, setRebuy] = useAtom(valueOfRebuy);
  const [doubleRebuy, setDoubleRebuy] = useAtom(valueOfDoubleRebuy);
  const [addOn, setAddOn] = useAtom(valueOfAddon);

  // Atom chips state hooks
  const [chipsChipTime, setChipTime] = useAtom(chipsOfChipTime);
  const [chipsBuyIn, setChipsBuyIn] = useAtom(chipsOfBuyIn);
  const [chipsDoubleBuyIn, setChipsDoubleBuyIn] = useAtom(chipsOfDoubleBuyIn);
  const [chipsRebuy, setChipsRebuy] = useAtom(chipsOfRebuy);
  const [chipsDoubleRebuy, setChipsDoubleRebuy] = useAtom(chipsOfDoubleRebuy);
  const [chipsAddOn, setChipsAddOn] = useAtom(chipsOfAddon);

  // Handle change function
  const handleValueChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, setValue: (value: number) => void) => {
      setValue(ensureNonNegativeValue(e.target.value));
    },
    []
  );

  const handleChipsChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, setValue: (value: number) => void) => {
      setValue(ensureNonNegativeValue(e.target.value));
    },
    []
  );

  const chipFields: Array<ActionChipsFieldProps> = [
    {
      label: "Buy-in",
      value: buyIn,
      chips: chipsBuyIn,
      onChange: (e) => handleValueChange(e, setBuyIn),
      chipsOnChange: (e) => handleChipsChange(e, setChipsBuyIn)
    },
    {
      label: "Buy-in (D)",
      value: doubleBuyIn,
      chips: chipsDoubleBuyIn,
      onChange: (e) => handleValueChange(e, setDoubleBuyIn),
      chipsOnChange: (e) => handleChipsChange(e, setChipsDoubleBuyIn)
    },
    {
      label: "Rebuy",
      value: rebuy,
      chips: chipsRebuy,
      onChange: (e) => handleValueChange(e, setRebuy),
      chipsOnChange: (e) => handleChipsChange(e, setChipsRebuy)
    },
    {
      label: "Rebuy (D)",
      value: doubleRebuy,
      chips: chipsDoubleRebuy,
      onChange: (e) => handleValueChange(e, setDoubleRebuy),
      chipsOnChange: (e) => handleChipsChange(e, setChipsDoubleRebuy)
    },
    {
      label: "Add on",
      value: addOn,
      chips: chipsAddOn,
      onChange: (e) => handleValueChange(e, setAddOn),
      chipsOnChange: (e) => handleChipsChange(e, setChipsAddOn)
    }
  ];

  return (
    <section className="flex flex-col bg-[#151515] w-full gap-2 rounded-3xl px-10 py-6">
      <h4 className="font-bold text-base">Set the value of each action</h4>

      <FormField
        variant="value"
        label="Chip Time"
        value={chipsChipTime}
        placeholder="Type chips amount"
        onChange={(e) => handleValueChange(e, setChipTime)}
      />

      {chipFields.map((field, index) => (
        <ActionChipsField
          key={index}
          label={field.label}
          value={field.value}
          chips={field.chips}
          onChange={field.onChange}
          chipsOnChange={field.chipsOnChange}
        />
      ))}
    </section>
  );
};

export default ValueForm;
