import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/session";
import "./loginForm.css";
import style from "../SplashPage/SplashPage.module.css";

export default function DemoUser() {
  const dispatch = useDispatch();

  const demoLogin = (e) => {
    e.preventDefault();
    dispatch(login("demo@aa.io", "password"));
  };
  return (
    <button
      className={
        window.location.pathname === "/splash"
          ? `${style.login__button}`
          : "form__button"
      }
      onClick={demoLogin}
    >
      Demo User
    </button>
  );
}
