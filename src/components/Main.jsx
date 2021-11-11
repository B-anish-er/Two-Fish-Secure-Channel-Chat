import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router";

import Chat from "./Chat";
import CreateChat from "./CreateChat";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Welcome from "./WelcomeUser";
import EnterEncryption from "./EnterEncryption";
import PrivateRoute from "./routing/PrivateRoute";
import Twofish from "./Twofish";
import { twofish } from "twofish";

export default function Main() {
  const [key, setKey] = useState("");

  useEffect(() => {
    // localStorage.setItem("key", key);
    var IV = [
        0xb4, 0x6a, 0x02, 0x60, 0xb0, 0xbc, 0x49, 0x22, 0xb5, 0xeb, 0x07, 0x85,
        0xa4, 0xb7, 0xcc, 0x9e,
      ],
      twF = twofish(IV),
      key = "ABCDABCDABCDABCD",
      keyByteArray = twF.stringToByteArray(key),
      pt = "Hello World!",
      ptByteArray = twF.stringToByteArray(pt),
      ctByteArray = twF.encryptCBC(keyByteArray, ptByteArray),
      ct = twF.byteArrayToString(ctByteArray),
      dt = twF.byteArrayToString(twF.decryptCBC(keyByteArray, ctByteArray));
    console.log(
      "Plain Text: ",
      pt,
      "\nEncrypted Text: ",
      ct,
      "\nDecrypted Text: ",
      dt
    );
  }, []);

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
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/" component={Welcome} />
        <PrivateRoute exact path="/createChat" component={CreateChat} />
        <PrivateRoute exact path="/chat" component={() => <Chat key={key} />} />
        <PrivateRoute
          exact
          path="/encryption"
          component={() => <EnterEncryption key={key} setKey={setKey} />}
        />
        <Route exact path="testing" component={() => <Twofish />} />
      </Switch>
    </div>
  );
}
