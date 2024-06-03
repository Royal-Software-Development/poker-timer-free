import { FieldProps } from "../../types/field"
import CounterField from "./CounterField"
import ChipsField from "./ValueAndChipsField"
import ValueField from "./ValueField"

const FormField = ({ variant, ...props }: FieldProps) => {
  switch (variant) {
    case "value":
      return <ValueField {...props} />
    case "counter":
      return <CounterField {...props} />
    case "chips":
      return <ChipsField {...props} />
    default:
      return null
  }
}

export default FormField
