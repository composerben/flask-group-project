import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../store/session";
import DemoUser from "./DemoUser";
import "./loginForm.css";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      await dispatch(signUp(username, email, password));
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to={`/users/${user.id}`} />;
  }

  return (
    <div className="parentForm">
      <h1>Sign up</h1>
      <form onSubmit={onSignUp} className="formItself">
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
