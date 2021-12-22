export interface AuthState {
  username: string | null;
  token: string | null;
  status: "not-authenticated" | "is-authenticated";
  errorMsg: string;
}

type AuthActions =
  | {
      type: "login";
      payload: { username: string; token: string };
    }
  | { type: "addError"; payload: string }
  | { type: "removeError" }
  | { type: "logout" };

export const authReducer = (
  state: AuthState,
  action: AuthActions
): AuthState => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        status: "is-authenticated",
        ...action.payload,
      };

    case "logout":
      return {
        ...state,
        username: null,
        token: null,
        status: "not-authenticated",
      };

    case "removeError":
      return {
        ...state,
        errorMsg: "",
      };

    case "addError":
      return {
        ...state,
        errorMsg: action.payload,
      };

    default:
      return state;
  }
};
