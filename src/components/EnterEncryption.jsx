import React from "react";
import styled from "styled-components";
import {[;++++]}

function EnterEncryption() {
  return (
    <Container>
      <Box>
        <Heading>
            Enter Encrytion Key
        </Heading>
        <KeyBox>
            <input type="text" placeholder="Enter Encrytion Key"></input>
            <i class="fas fa-paper-plane"></i>
        </KeyBox>
      </Box>
    </Container>
  );
}

export default EnterEncryption;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #000000;
  height: 100vh;
  background: url(../BlurredBg.png);
  background-size: cover;
  background-position: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #0C101E;
  height: 50vh;
  min-height: 50%;
  max-height: 50%;
  width: 75%;
  min-width: 40%;
  max-width: 400px;
  border: 1px solid #ffffff;
  border-radius: 20px;
`;

const Heading = styled.h1`
    text-align: center;
    font-family: 'Montserrat';
    ont-size:calc(22px + 1.5vw);
    font-weight: bold;
    color: #ffffff;
    margin-top: 20px;
`

const KeyBox = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: 90% 10% ;
  height: 52px;
  width: 75%;
  background: white;
  border: 1px transparent;
  border-radius: 20px;
  input {
    color: #000000;
    text-align: center;
    background: none !important;
    border: none !important;
    outline: none !important;
  }
  input:focus {
  outline: 0px transperent;
}
`;
