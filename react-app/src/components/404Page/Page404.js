import React from "react";
import {Link} from "react-router-dom"
import style from "./Page404.module.css"

export default function Page404() {
    
    return (
      <div className={style["not-found__container"]}>
        <h1>Sorry, this page isn't available.</h1>
        <p>
          The link you followed may be broken, or the page may have been
          removed. Go back <Link to="/">to Like-or-Hate</Link>.
        </p>
      </div>
    );
}