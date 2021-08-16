import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/session";
import DemoUser from "./DemoUser";
import "./loginForm.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data?.errors) {
      setErrors(data?.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to={`/users/${user.id}`} />;
  }

  return (
    <div className="parentForm">
      <h1> Login </h1>
      <form onSubmit={onLogin} className="formItself">
        <div className="errorsStuff">
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
        <div className="form__field">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
            className="form__input"
          />
        </div>
        <div className="form__field">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
            className="form__input"
          />
        </div>
        <div className="form__buttons">
          <button className="form__button" type="submit">
            Login
          </button>
          <DemoUser />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
