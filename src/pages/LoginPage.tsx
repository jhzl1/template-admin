import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import FormLogin from "../components/FormLogin";
import { routes } from "../routes/routes";

const LoginPage = () => {
  const { home } = routes;

  return (
    <div className="unprotected-screen-container">
      <div className="container-form-login">
        <img
          src={require("../assets/img/unidigital-black.jpg")}
          alt="Corporacion Unidigital"
          className="h-14 mb-14 md:mb-5"
        />

        <Text
          fontSize="2xl"
          fontWeight="bold"
          mb="1"
          className="text-slate-600"
        >
          Iniciar sesión
        </Text>

        <FormLogin />

        <Link to={home} className="custom-link mt-14 md:mt-5">
          ¿Ha olvidado la contraseña?
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
