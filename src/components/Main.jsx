import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import Login from "./Login";
import Register from "./Register";
import Welcome from "./WelcomeUser";

export default function Main() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div
      style={{
        backgroundImage: "url(/bg.png)",
        backgroundRepeat: "no-repeat",
        position: "absolute",
        width: "100%",
        height: "100vh",
        // border: "10px solid blue",
      }}
      className="fluid-container"
    >
      <Switch>
        {/* <Redirect exact path="/" to="/login" /> */}
        {isLoggedIn ? (
          <Route exact path="/" component={Welcome} />
        ) : (
          <Redirect exact path="/" to="/login" />
        )}
        <Route
          exact
          path="/login"
          component={() => <Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          exact
          path="/register"
          component={() => <Register setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route exact path="/createChat" component={null} />
      </Switch>
      {/* <Login /> */}
    </div>
  );
}
