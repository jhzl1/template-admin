import { Form } from "formik";
import { FC } from "react";

interface FormProps {
  inline?: Boolean;
  children: JSX.Element | JSX.Element[];
}

const CustomForm: FC<FormProps> = ({ inline = false, children }) => {
  return (
    <Form className={`flex flex-${inline ? "row" : "col"} w-full`}>
      {children}
    </Form>
  );
};

export default CustomForm;
