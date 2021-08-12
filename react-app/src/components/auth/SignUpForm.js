import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../store/session";
import DemoUser from "./DemoUser";
import "./loginForm.css";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data.errors) {
        setErrors(data.errors);
      }
    } else {
      setErrors(["Passwords do not match"])
    }
  };

  const updateUsername = (e) => {
    setErrors([]);
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setErrors([]);
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setErrors([]);
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setErrors([]);
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  console.log("Errors:", errors)

  return (
    <div className="parentForm">
      <h1>Sign up</h1>
      <form onSubmit={onSignUp} className="formItself">
        <div className={errors.length >= 1 ? "errorsStuff" : "errorsStuff-hidden"}>
          {errors.length > 1 ? "Error(s) found:" : "Error found:"}
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </div>
        <div className="form__field">
          <label>User Name</label>
          <input
            type="text"
            name="username"
            onChange={updateUsername}
            placeholder="Username"
            value={username}
            className="form__input"
          ></input>
        </div>
        <div className="form__field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={updateEmail}
            value={email}
            className="form__input"
          ></input>
        </div>
        <div className="form__field">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={updatePassword}
            value={password}
            className="form__input"
          ></input>
        </div>
        <div className="form__field">
          <label>Repeat Password</label>
          <input
            type="password"
            name="repeat_password"
            placeholder="Confirm password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
            className="form__input"
          ></input>
        </div>
        <div className="form__buttons">
          <button className="form__button" type="submit">
            Sign Up
          </button>
          <DemoUser />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
