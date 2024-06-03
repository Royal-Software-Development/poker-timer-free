import { FormFieldProps } from "../../types/field";
import CounterField from "./CounterField";
import ChipsField from "./ChipsField";
import ValueField from "./ValueField";

const FormField = ({ variant, ...props }: FormFieldProps) => {
  switch (variant) {
    case "value":
      return <ValueField {...props} />;
    case "counter":
      return <CounterField {...props} />;
    case "chips":
      return <ChipsField {...props} />;
    default:
      return null;
  }
};

export default FormField;
