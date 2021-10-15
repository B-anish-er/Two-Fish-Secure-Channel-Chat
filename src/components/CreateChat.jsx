import React, { useState } from "react";
import { Container } from "react-bootstrap";

import InputField from "./InputField";

export default function CreateChat() {
  const [connect, setConnect] = useState("");

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
        <p className="m-2">
          <label htmlFor="connectname">Username</label>
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
