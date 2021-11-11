import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import connectContext from "../context/connect/connectContext";

import InputField from "./InputField";
import { StyledButton } from "./Button";
import authContext from "../context/auth/authContext";
// import alertContext from "../context/alert/alertContext";

export default function CreateChat() {
  const [connect, setConnect] = useState("");
  const {
    connections,
    error,
    getAllConnections,
    selectConnection,
    createConnection,
    acceptConnection,
  } = useContext(connectContext);
  const { loadUser, user } = useContext(authContext);
  // const { alerts, setAlert } = useContext(alertContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => !user && loadUser(), []);
  useEffect(() => {
    getAllConnections(user.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.name]);

  return (
    <Container
      style={{
        // border: "1px solid red",
        minHeight: "100vh",
      }}
      className="d-flex align-items-center"
    >
      <div
        style={{
          minWidth: "50%",
          padding: "10%",
        }}
        className="m-auto"
      >
        <h1 className="text-center mb-4">Connect With</h1>{" "}
        {connections &&
          Object.keys(connections).map((value) => (
            <Link
              to="/encryption"
              key={value}
              onClick={() => selectConnection(value)}
            >
              {" "}
              <h4>
                {value}{" "}
                {!connections[value] && (
                  <button
                    // style={{ all: "unset" }}
                    onClick={() => acceptConnection(value, user.name)}
                  >
                    +
                  </button>
                )}
              </h4>{" "}
            </Link>
          ))}
        <br />
        <p className="m-2">
          <label htmlFor="connectname">New Connection</label>
        </p>
        <div>
          <InputField
            required
            type="text"
            name="connectname"
            id="connectname"
            placeholder="johndoe123"
            value={connect}
            onChange={(e) => setConnect(e.target.value)}
          />
          <StyledButton
            onClick={() => {
              createConnection(connect, user.name);
            }}
          >
            Continue
          </StyledButton>
          {error && (
            <p style={{ color: "red" }}>Error: {JSON.stringify(error)} </p>
          )}
        </div>
        {/* <StyledButton type="submit" onClick={sendLogin}>
        Continue
      </StyledButton> */}
      </div>
    </Container>
  );
}
