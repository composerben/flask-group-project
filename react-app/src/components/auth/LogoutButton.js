import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";

const LogoutButton = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onLogout = async (e) => {
    e.preventDefault();
    await dispatch(logout());
    history.push("/splash")
  };

  return (
    <div className="logoutButton">
      <NavLink to="/splash" onClick={onLogout}>
        Logout
      </NavLink>
    </div>
  );
};

export default LogoutButton;
