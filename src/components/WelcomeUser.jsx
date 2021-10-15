import React from "react";
import styled from "styled-components";
// import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Welcome() {
    return (
      <div
      style={{
        backgroundImage: "url(/bg.png)",
        backgroundRepeat: "no-repeat",
        position: "absolute",
        width: "100%",
        height: "100vh",
        // border: "10px solid blue",
      }}
      className="fluid-container">
      <Center>
        <Container>
            <Heading>Hello <br></br>Name</Heading>
            <Button>
            <Link to="/">
              Get Started ->
            </Link>
            </Button> 
        </Container>
        
      </Center>
      </div>
    );
  }

const Heading = styled.h1`
    font-size: 7em;
    font-weight: 700;
    font-family: Montserrat, arial, sans-serif;
`
const Center = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`
const Container = styled.div`
  padding: 0;
  margin: 0;
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
    margin-top: 80px;
    width: 25%;
    min-width: 200px;
    height: 50px;
    background: white;
    color: black;
    border: 1px solid transparent;
    border-radius: 20px;
    font-family:Montserrat;
    font-weight:600;

`
