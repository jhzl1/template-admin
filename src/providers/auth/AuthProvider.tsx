import { createContext, useReducer } from "react";
import locatelApi from "../../api/locatelApi";
import { successToast } from "../../helpers/toast";
import { FormLoginProps, FormLoginRes } from "../../interfaces/forms/formLogin";
import { authReducer, AuthState } from "./authReducer";

//forma del estado de la autenticacion de la app
type AuthContextProps = {
  username: string | null;
  token: string | null;
  status: "not-authenticated" | "is-authenticated";
  errorMsg: string;
  login: (loginData: FormLoginProps) => void;
  logout: () => void;
};

export const AuthContext = createContext({} as AuthContextProps);

const authInitialState: AuthState = {
  status: "not-authenticated",
  username: null,
  token: null,
  errorMsg: "",
};

const init = (): AuthState => {
  const dataUser = JSON.parse(localStorage.getItem("data-user") as never);

  if (!dataUser) {
    return authInitialState;
  }

  return {
    ...authInitialState,
    username: dataUser.username,
    token: dataUser.token,
    status: "is-authenticated",
  };
};

const AuthProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [state, dispatch] = useReducer(authReducer, {}, init);

  //si el usuario esta autenticado todas las llamadas al api incluiran el token
  if (state.status === "is-authenticated") {
    locatelApi.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${state.token}`;
  } else {
    delete locatelApi.defaults.headers.common["Authorization"];
  }

  const login = async ({ email, password }: FormLoginProps) => {
    const { errorMsg } = state;

    if (errorMsg) {
      dispatch({ type: "removeError" });
    }

    try {
      const res = await locatelApi.post<FormLoginRes>("/auth", {
        email,
        password,
      });

      localStorage.setItem("data-user", JSON.stringify(res.data));

      dispatch({ type: "login", payload: res.data });

      successToast(`Bienvenido, ${res.data.username}`);
    } catch (e: any) {
      const { msg } = e.response.data;

      dispatch({ type: "addError", payload: msg });
    }
  };

  const logout = () => {
    dispatch({ type: "logout" });
    localStorage.removeItem("data-user");
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
