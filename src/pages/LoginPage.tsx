import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import FormLogin from "../components/FormLogin";
import { routes } from "../routes/routes";

const LoginPage = () => {
  const { home } = routes;

  return (
    <div className="unprotected-screen-container">
      <div className="bg-white p-10 rounded-xl shadow-2xl flex flex-col items-center w-1/4">
        <Text
          fontSize="2xl"
          fontWeight="bold"
          mb="3"
          className="text-slate-600"
        >
          Iniciar sesión
        </Text>

        <FormLogin />

        <Link
          to={home}
          className="font-medium text-blue-500 hover:text-blue-800 transition duration-300 "
        >
          ¿Ha olvidado la contraseña?
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
