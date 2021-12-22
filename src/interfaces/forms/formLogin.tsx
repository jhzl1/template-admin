export interface FormLoginProps {
  email: String;
  password: String;
}

export interface FormLoginRes {
  ok: Boolean;
  username: string;
  token: string;
}
