import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import PostShow from "./components/PostShow/PostShow";
import User from "./components/User/User";
import PostForm from "./components/PostForm/PostForm";
import Footer from "./components/Footer";
import SplashPage from "./components/SplashPage";
import { authenticate } from "./store/session";
import { useDispatch } from "react-redux";
import Page404 from "./components/404Page";

function App() {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <Route path="/splash">
          <SplashPage />
        </Route>
        <ProtectedRoute path="/posts" exact={true}>
          <PostShow />
        </ProtectedRoute>
        <ProtectedRoute path="/new-post" exact={true}>
          <PostForm />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <Route>
          <Page404 />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
