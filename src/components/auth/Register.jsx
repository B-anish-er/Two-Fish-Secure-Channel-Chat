import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import AuthContext from "../../context/auth/authContext";
import InputField from "../InputField";
import { StyledButton } from "../Button";

export default function Register() {
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }

    if (error === "User already exists") {
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const { name, email, password, cpassword } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
    } else if (password !== cpassword) {
      // setAlert("Password and Confirm Password do not match", "important");
    } else {
      register({ name, email, password });
    }
  };

  return (
    <form name="authForm" id="authForm" onSubmit={onSubmit}>
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
            <label htmlFor="email">Username</label>
          </p>
          <InputField
            required
            type="text"
            name="name"
            id="name"
            value={name}
            placeholder="johndoe@example.com"
            onChange={onChange}
          />
          <p className="m-2">
            <label htmlFor="email">Email ID</label>
          </p>
          <InputField
            required
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="johndoe@example.com"
            onChange={onChange}
          />
          <p className="m-1">
            <label htmlFor="password">Password</label>
          </p>
          <InputField
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={onChange}
            minlength="6"
            required
          />
          <p className="m-1">
            <label htmlFor="cpassword">Confirm Password</label>
          </p>
          <InputField
            type="password"
            name="cpassword"
            id="cpassword"
            value={cpassword}
            onChange={onChange}
            minlength="6"
            required
          />
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/" style={{ color: "#7278FF" }}>
              Sign Up
            </Link>
          </p>
          <StyledButton type="submit">Continue</StyledButton>
        </div>
      </Container>
    </form>
  );
}
