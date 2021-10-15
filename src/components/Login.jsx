import React from "react";
import { useHistory } from "react-router";
import { Container } from "react-bootstrap";
import InputField from "./InputField";
import { Link } from "react-router-dom";

import { StyledButton } from "./Button";

export default function Login({ setIsLoggedIn }) {
  const history = useHistory();
  const sendLogin = () => {
    setIsLoggedIn(true);
    history.push("/");
  };
  return (
    <form>
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
          <h1 className="text-center mb-4">Login</h1>{" "}
          <p className="m-2">
            <label htmlFor="email">Email ID</label>
          </p>
          <InputField
            required
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@example.com"
          />
          <p className="m-1">
            <label htmlFor="password">Password</label>
          </p>
          <InputField type="password" name="password" id="password" />
          <p className="text-center">
            Don't have an account?{" "}
            <Link to="/register" style={{ color: "#7278FF" }}>
              Sign Up
            </Link>
          </p>
          <StyledButton type="submit" onClick={sendLogin}>
            Continue
          </StyledButton>
        </div>
      </Container>
    </form>
  );
}

// eslint-disable-next-line no-lone-blocks
{
  /* <Link to="/register">Sign Up</Link> */
}
