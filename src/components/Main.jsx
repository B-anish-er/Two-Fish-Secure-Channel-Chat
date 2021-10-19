import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router";

import Chat from "./Chat";
import Chat2 from "./ChatInterface";
import CreateChat from "./CreateChat";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Welcome from "./WelcomeUser";
import EnterEncryption from "./EnterEncryption";
import PrivateRoute from "./routing/PrivateRoute";

export default function Main() {
  const [key, setKey] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("key")) localStorage.setItem("key", key);
  }, [key]);

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
        <Route exact path="/login" component={() => <Login />} />
        <Route exact path="/register" component={() => <Register />} />
        <PrivateRoute exact path="/" component={() => <Welcome />} />
        <PrivateRoute exact path="/createChat" component={CreateChat} />
        <PrivateRoute exact path="/chat" component={Chat} />
        <PrivateRoute
          exact
          path="/encryption"
          component={() => <EnterEncryption setKey={setKey} />}
        />
        <Route exact path="testing" component={Chat2} />
      </Switch>
    </div>
  );
}
