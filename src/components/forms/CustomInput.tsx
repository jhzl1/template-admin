import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
} from "@chakra-ui/react";
import { useField } from "formik";
import { FC } from "react";

interface CustomInputProps extends InputProps {
  showLabel?: Boolean;
  placeholder: string;
  name: string;
}

const CustomInput: FC<CustomInputProps & FormControlProps> = ({
  isRequired,
  placeholder,
  showLabel = false,
  ...props
}) => {
  const [field, { error, touched }] = useField(props as never);

  const commonProps = {
    placeholder,
    _focus: {
      border: "2px solid ",
      borderColor: "#4299E1",
    },
    focusBorderColor: "blue.500",
    variant: "filled",
    autoComplete: "off",
    boxShadow: "base",
    color: "#334155",
  };

  return (
    <FormControl
      isRequired={isRequired}
      width="full"
      my="2"
      isInvalid={!!error && touched}
    >
      {showLabel && (
        <FormLabel fontWeight="bold" className="text-slate-600">
          {placeholder}
        </FormLabel>
      )}
      <Input {...props} {...commonProps} {...field} />
      {error && touched && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default CustomInput;
