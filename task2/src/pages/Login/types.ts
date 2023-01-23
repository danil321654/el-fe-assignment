export interface LoginProps {
  authLogin: string;
  signIn: (login: string, pass: string) => void;
}
