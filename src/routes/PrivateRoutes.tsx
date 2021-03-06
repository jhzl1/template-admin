import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { routes } from "./routes";

const PrivateRoutes = ({ children }: { children: JSX.Element }) => {
  const { login } = routes;

  const { status } = useAuth();

  return status === "is-authenticated" ? children : <Navigate to={login} />;
};

export default PrivateRoutes;
