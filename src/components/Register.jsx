import React from "react";
// import { Link } from "react-router-dom";
import "./Login.css";
import { Container } from "react-bootstrap";
import InputField from "./InputField";
import { Link } from "react-router-dom";

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
          <input type="submit" className="btn" value="Continue" />
        </div>
      </Container>
    </form>
  );
}
