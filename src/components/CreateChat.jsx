import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import connectContext from "../context/connect/connectContext";

import InputField from "./InputField";
import { StyledButton } from "./Button";

export default function CreateChat({ username }) {
  const [connect, setConnect] = useState("");
  const { connections, getAllConnections, selectConnection, createConnection } =
    useContext(connectContext);

  useEffect(() => {
    getAllConnections(username);
  }, [username]);

  const sendConnection = () => {
    createConnection(connect);
  };

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
          connections.map((value) => (
            <Link to="/" onClick={() => selectConnection(value)}>
              {" "}
              <h4>{value.name}</h4>{" "}
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
          <StyledButton onClick={sendConnection}>Continue</StyledButton>
        </div>
        {/* <StyledButton type="submit" onClick={sendLogin}>
        Continue
      </StyledButton> */}
      </div>
    </Container>
  );
}
