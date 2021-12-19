import { Button } from "@chakra-ui/react";
import { Formik } from "formik";
import { FC } from "react";
import { initialValues, schemaLogin } from "../config/forms/formLogin";
import { FormLoginProps } from "../interfaces/forms/formLogin";
import CustomForm from "./forms/CustomForm";
import CustomInput from "./forms/CustomInput";

const FormLogin: FC = () => {
  const handleSubmit = (data: FormLoginProps) => {
    console.log(data);
  };

  //   const ValidateWithApi = () => {
  //     const { setFieldError, setFieldTouched } = useFormikContext();
  //     useEffect(() => {
  //       if (test) {
  //         setFieldTouched("password", true, false);
  //         setFieldError("password", "No es valida");
  //       }
  //     }, [setFieldError, setFieldTouched]);

  //     return null;
  //   };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schemaLogin}
    >
      {({ isSubmitting }) => (
        <CustomForm>
          <CustomInput placeholder="Email" name="email" showLabel />
          <CustomInput
            placeholder="Contraseña"
            name="password"
            type="password"
            showLabel
          />

          {/* <ValidateWithApi /> */}

          <Button colorScheme="messenger" my="2" type="submit">
            Iniciar sesión
          </Button>
        </CustomForm>
      )}
    </Formik>
  );
};

export default FormLogin;
