import { AUTH_KEY } from "consts";
import { useCallback } from "react";
import { useState } from "react";

const initAuth = localStorage.getItem(AUTH_KEY);

export const useAuthorize = (): [
  string,
  (login: string, pass: string) => void,
  () => void
] => {
  const [authInfo, setAuthorized] = useState(initAuth?.split(":")[0] ?? "");

  const signIn = useCallback((login: string, pass: string) => {
    localStorage.setItem(AUTH_KEY, `${login}:${pass}`);
    setAuthorized(login);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(AUTH_KEY);
    setAuthorized("");
  }, []);

  return [authInfo, signIn, signOut];
};
