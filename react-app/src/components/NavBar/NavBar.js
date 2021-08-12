import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import { useSelector } from "react-redux";
import "./navbar.css";

const NavBar = () => {
  const currentUser = useSelector((state) => state.session.user);
  return (
    <nav>
      {!currentUser && (
        <div>
          <NavLink to="/splash" exact={true} activeClassName="active">
            Home
          </NavLink>
        </div>
      )}
      <div>
        <NavLink to="/posts" exact={true} activeClassName="active">
          Posts
        </NavLink>
      </div>
      {!currentUser && (
        <>
          <div>
            <NavLink to="/login" exact={true} activeClassName="active">
              Login
            </NavLink>
          </div>
          <div>
            <NavLink to="/sign-up" exact={true} activeClassName="active">
              Sign Up
            </NavLink>
          </div>
        </>
      )}
      {currentUser && (
        <>
          <div>
            <NavLink to="/new-post" exact={true} activeClassName="active">
              New Post
            </NavLink>
          </div>
          <LogoutButton />
        </>
      )}
    </nav>
  );
};

export default NavBar;
