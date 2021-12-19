import * as Yup from "yup";
import { FormLoginProps } from "../../interfaces/forms/formLogin";

export const initialValues: FormLoginProps = {
  email: "",
  password: "",
};

export const schemaLogin = Yup.object({
  email: Yup.string()
    .email("No es un email válido")
    .required("El email es requerido"),
  password: Yup.string().required("La contraseña es requerida"),
});
