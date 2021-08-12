import React from "react";
import style from "./SplashPage.module.css";
import {useSelector} from "react-redux";
import {Link, Redirect} from "react-router-dom";
import ScreenShot from "./ScreenShot.png";

export default function SplashPage() {
  const user = useSelector(state => state.session?.user);

  if (user) {
    return <Redirect to="/posts" />
  }

  return (
    <div className={style.splash__container}>
      <div className={style.screenshot__container}>
        <img src={ScreenShot} alt="capture of website in action" className={style.screenshot} />
      </div>
      {!user && (
        <div>
          <Link to="/login">
            <p>Have an account?</p>
          </Link>
          <Link to="/sign-up">
            <p>Create an account</p>
          </Link>
        </div>
      )}
    </div>
  );
}
