import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return (
    <div className="logoutButton">
      <NavLink to="/" onClick={onLogout}>
        Logout
      </NavLink>
    </div>
  );
};

export default LogoutButton;
