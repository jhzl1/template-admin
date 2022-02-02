import { Alert, AlertIcon, Button } from "@chakra-ui/react";
import { Formik } from "formik";
import { FC } from "react";
import { Navigate } from "react-router-dom";
import { initialValues, schemaLogin } from "../config/forms/formLogin";
import useAuth from "../hooks/useAuth";
import { FormLoginProps } from "../interfaces/forms/formLogin";
import { routes } from "../routes/routes";
import CustomForm from "./forms/CustomForm";
import CustomInput from "./forms/CustomInput";
import LoadingIndicator from "./ui/LoadingIndicator";

const FormLogin: FC = () => {
  const { status, login, errorMsg } = useAuth();

  const handleSubmit = async (data: FormLoginProps) => {
    await login(data);
  };

  const { home } = routes;

  if (status === "is-authenticated") return <Navigate to={home} />;

  return (
    <>
      {errorMsg && (
        <Alert status="error" rounded="xl">
          <AlertIcon />
          <span className="text-slate-700">{errorMsg}</span>
        </Alert>
      )}

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
            {isSubmitting ? (
              <LoadingIndicator />
            ) : (
              <Button
                colorScheme="messenger"
                my="2"
                type="submit"
                fontWeight="medium"
              >
                Iniciar sesión
              </Button>
            )}
          </CustomForm>
        )}
      </Formik>
    </>
  );
};

export default FormLogin;
