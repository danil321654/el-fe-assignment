import "./Login.scss";

import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginProps } from "./types";

export const Login: FC<LoginProps> = ({ authLogin, signIn }) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  useEffect(() => {
    if (authLogin) {
      setTimeout(() => navigate("/todos"), 3000);
    }
  }, [authLogin, navigate]);

  return (
    <div className="login">
      {authLogin ? (
        <div className="login__message">
          {" "}
          Hello, {authLogin} {"(Redirecting...)"}
        </div>
      ) : (
        <div className="login__form">
          <label>
            login
            <input value={login} onChange={(e) => setLogin(e.target.value)} />
          </label>
          <label>
            pass
            <input value={pass} onChange={(e) => setPass(e.target.value)} />
          </label>
          <button onClick={() => signIn(login, pass)}>login </button>
        </div>
      )}
    </div>
  );
};
