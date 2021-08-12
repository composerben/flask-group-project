import React, { useEffect, useState } from "react";
import style from "./SplashPage.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../store/session";
import ScreenShot from "./ScreenShot.png";

export default function SplashPage() {
  const user = useSelector((state) => state.session?.user);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (email.length > 4 && password.length > 1) setDisabled(true);
  }, [email, password]);

  if (user) {
    return <Redirect to="/posts" />;
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  console.log("Value for disabled", disabled)

  return (
    <div className={style.splash__container}>
      <div className={style.screenshot__container}>
        <img
          src={ScreenShot}
          alt="capture of website in action"
          className={style.screenshot}
        />
      </div>
      {!user && (
        <div className={style.authentication__container}>
        <form className={style.login} onSubmit={submitLogin}>
          <h3>Like or Hate</h3>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
            className={style.form__input}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
            className={style.form__input}
          />
          <button
            className={
              disabled
                ? style.login__button
                : `${style["login__button-disabled"]} ${style.login__button}`
            }
            type="submit"
            disabled={disabled}
          >
            Login
          </button>
        </form>
        <div className={style.signup}>
          Don't have an account? <Link to="/sign-up">Sign up</Link>
        </div>
        </div>
      )}
    </div>
  );
}
