import React from "react";
import { useHistory } from "react-router";
import { Container } from "react-bootstrap";
import InputField from "./InputField";
import { Link } from "react-router-dom";

import { StyledButton } from "./Button";

export default function Register({ setIsLoggedIn }) {
  const history = useHistory();
  const sendRegister = () => {
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
          <h1 className="text-center mb-4">Register</h1>{" "}
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
          <p className="m-1">
            <label htmlFor="cpassword">Confirm Password</label>
          </p>
          <InputField type="cpassword" name="cpassword" id="cpassword" />
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/" style={{ color: "#7278FF" }}>
              Sign Up
            </Link>
          </p>
          <StyledButton type="submit" onClick={sendRegister}>
            Continue
          </StyledButton>
        </div>
      </Container>
    </form>
  );
}
