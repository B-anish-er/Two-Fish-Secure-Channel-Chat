import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";

import InputField from "../InputField";
import { StyledButton } from "../Button";

export default function Login({ setIsLoggedIn }) {
  const history = useHistory();
  // const sendLogin = () => {
  //   setIsLoggedIn(true);
  //   history.push("/");
  // };

  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }

    if (error === "Invalid Credentials") {
      alertContext.setAlert("Invalid Credententials", "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email !== "" || password !== "") {
      login({
        email,
        password,
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
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
            onChange={onChange}
          />
          <p className="m-1">
            <label htmlFor="password">Password</label>
          </p>
          <InputField
            type="password"
            name="password"
            id="password"
            onChange={onChange}
          />
          <p className="text-center">
            Don't have an account?{" "}
            <Link to="/register" style={{ color: "#7278FF" }}>
              Sign Up
            </Link>
          </p>
          <StyledButton type="submit">Continue</StyledButton>
        </div>
      </Container>
    </form>
  );
}

// eslint-disable-next-line no-lone-blocks
{
  /* <Link to="/register">Sign Up</Link> */
}
