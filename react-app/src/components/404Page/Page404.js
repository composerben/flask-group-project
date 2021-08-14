import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./Page404.module.css";

export default function Page404() {
  const user = useSelector((state) => state.session.user);

  return (
    <div className={style["not-found__container"]}>
      <h1>Sorry, this page isn't available.</h1>
      <p>
        The link you followed may be broken, or the page may have been removed.
        Go back{" "}
        <Link to={user ? `/users/${user.id}` : "/splash"}>to Like-or-Hate</Link>
        .
      </p>
    </div>
  );
}
