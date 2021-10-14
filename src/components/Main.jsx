import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Login from "./Login";
import Register from "./Register";

export default function Main() {
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
        <Redirect exact path="/" to="/login" />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
      {/* <Login /> */}
    </div>
  );
}
