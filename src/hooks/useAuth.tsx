import { useContext } from "react";
import { AuthContext } from "../providers/auth/AuthProvider";

const useAuth = () => {
  const authContext = useContext(AuthContext);

  return authContext;
};

export default useAuth;
