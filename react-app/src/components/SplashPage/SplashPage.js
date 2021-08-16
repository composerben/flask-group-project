import React, { useEffect, useState } from "react";
import style from "./SplashPage.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../store/session";
import ScreenShot from "./ScreenShot.png";
import DemoUser from "../auth/DemoUser";

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
    if (data?.errors) {
      setErrors(data?.errors);
    }
  };

  return (
    <>
      <h1>Welcome to Like-or-Hate</h1>
      <h3 className={style.splash__blurb}>
        Like Instagram, but you can delete posts by disliking...LET THE CHAOS
        UNFOLD
      </h3>
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
              <h2 className={style.login__header}>Like or Hate</h2>
              <div className="errorsStuff">
                {errors.map((error) => (
                  <div key={error}>{error}</div>
                ))}
              </div>
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
                disabled={!disabled}
              >
                Login
              </button>
              <div className={style.divider__container}>
                <div className={style.divider}></div>
                <div className={style.divider__text}>OR</div>
                <div className={style.divider}></div>
              </div>
              <DemoUser />
            </form>
            <div className={style.signup}>
              Don't have an account? <Link to="/sign-up">Sign up</Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
