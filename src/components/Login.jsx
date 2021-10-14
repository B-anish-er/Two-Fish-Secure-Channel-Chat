import React from "react";
// import { Link } from "react-router-dom";
import "./Login.css";
import { Container } from "react-bootstrap";
import InputField from "./InputField";

export default function Login() {
  return (
    <form action="sendLogin()" method="post">
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
            <a href="/" style={{ color: "#7278FF" }}>
              Sign Up
            </a>
          </p>
          <input type="submit" className="btn" value="Continue" />
        </div>
      </Container>
    </form>
  );
}

{
  /* <Link to="/register">Sign Up</Link> */
}
