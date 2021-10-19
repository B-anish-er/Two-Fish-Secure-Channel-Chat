import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import authContext from "../context/auth/authContext";
import { StyledButton } from "./Button";

export default function Welcome() {
  const { loadUser, logout, user } = useContext(authContext);

  useEffect(() => loadUser(), []);
  return (
    <div
      style={{
        backgroundImage: "url(/bg2.png)",
        backgroundRepeat: "no-repeat",
        position: "absolute",
        width: "100%",
        height: "100vh",
        // border: "10px solid blue",
      }}
      className="fluid-container"
    >
      <Center>
        <Container>
          <Heading>
            Hello <br />
            {/* {JSON.stringify(user)} */}
            {user && user.name}
          </Heading>
          <StyledButton>
            <Link to="/createChat" style={{ all: "unset" }}>
              Get Started -{">"}
            </Link>
          </StyledButton>
          <StyledButton>
            <Link onClick={() => logout()} to="#!" style={{ all: "unset" }}>
              Logout
            </Link>
          </StyledButton>
        </Container>
      </Center>
    </div>
  );
}

const Heading = styled.h1`
  font-size: 7em;
  font-weight: 700;
  font-family: Montserrat, arial, sans-serif;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
const Container = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// const Button = styled.button`
//   margin-top: 80px;
//   width: 25%;
//   min-width: 200px;
//   height: 50px;
//   background: white;
//   color: black;
//   border: 1px solid transparent;
//   border-radius: 20px;
//   font-family: Montserrat;
//   font-weight: 600;
// `;
