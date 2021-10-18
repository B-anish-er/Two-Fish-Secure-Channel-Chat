import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import InputField from "./InputField";

export default function CreateChat({ username }) {
  const [connect, setConnect] = useState("");
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    setConnections([
      { name: "Shagun" },
      { name: "Anish" },
      { name: "John" },
      { name: "Doe" },
    ]);
  }, []);

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
            <Link to="/">
              {" "}
              <h4>{value.name}</h4>{" "}
            </Link>
          ))}
        <br />
        <p className="m-2">
          <label htmlFor="connectname">New Connection</label>
        </p>
        <InputField
          required
          type="email"
          name="connectname"
          id="connectname"
          placeholder="johndoe123"
        />
        {/* <StyledButton type="submit" onClick={sendLogin}>
        Continue
      </StyledButton> */}
      </div>
    </Container>
  );
}
