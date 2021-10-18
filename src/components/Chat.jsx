import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
// import { Link } from "react-router-dom";

// import InputField from "./InputField";

import chat1 from "./chatExample";

// import * as Chats from "../chatExample.json";

export default function Chat() {
  return (
    // <div>
    //   <StyledLeftBubble></StyledLeftBubble>
    //   <StyledRightBubble></StyledRightBubble>
    // </div>
    <Container
      style={{
        // border: "1px solid red",
        maxHeight: "100vh",
        // minWidth: "600px",
      }}
      className="d-flex align-items-center"
    >
      {" "}
      <ChatWindow className="m-auto">
        <GrpName>
          <p>Some Name</p>
        </GrpName>
        <Scrollable className="m-auto">
          <StyledLeftBubble>
            aoidfjajosdifaposfdnp oasdnfoasdndf osndfosadnfpo
          </StyledLeftBubble>
          <StyledRightBubble>
            aoidfjajosdifaposfdnp oasdnfoasdndf osndfosadnfpo
          </StyledRightBubble>
          <StyledRightBubble>
            aoidfjajosdifaposfdnp oasdnfoasdndf osndfosadnfpo
          </StyledRightBubble>
          <StyledLeftBubble>
            aoidfjajosdifaposfdnp oasdnfoasdndf osndfosadnfpo
          </StyledLeftBubble>
          <StyledLeftBubble>
            aoidfjajosdifaposfdnp oasdnfoasdndf osndfosadnfpo
          </StyledLeftBubble>
          <StyledRightBubble>
            aoidfjajosdifaposfdnp oasdnfoasdndf osndfosadnfpo
          </StyledRightBubble>
          <StyledRightBubble>
            aoidfjajosdifaposfdnp oasdnfoasdndf osndfosadnfpo
          </StyledRightBubble>
          <StyledLeftBubble>
            aoidfjajosdifaposfdnp oasdnfoasdndf osndfosadnfpo
          </StyledLeftBubble>
        </Scrollable>{" "}
        <ChatInput>
          <input placeholder="Type Your Message"></input>
          <p>send icon</p>
        </ChatInput>
      </ChatWindow>
    </Container>
  );
}

const ChatWindow = styled.div`
  height: 100vh;
  // maxheight: 100vh;
  background-image: url(../chatbg.png);
  background-size: cover;
  background-position: center;
`;

const Scrollable = styled.div`
  overflow-y: scroll;
  min-width: 600px;
  padding: 10%;
  max-height: 80%;
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #1f43b1;
  }
`;

const StyledLeftBubble = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 20px;
  margin: 30px 250px 30px 0;
  // border: 1px solid green;

  // position: absolute;
  min-width: 287px;
  max-width: 400px;
  min-height: 44px;

  /* Color / Blue */

  background: #1868fb;

  /* Elevation 100 */

  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.24), 0px 2px 4px rgba(0, 0, 0, 0.16),
    0px -1px 1px rgba(0, 0, 0, 0.08);
  border-radius: 0px 24px 24px 24px;
`;

const StyledRightBubble = styled.div`
  /* Guts / Bubble Left */

  /* Auto Layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 20px;
  margin: 30px 0 30px 250px;

  min-width: 287px;
  max-width: 400px;
  min-height: 44px;

  /* Color / Blue */
  color: #fff;
  background: #00bf9d;
  /* Elevation 100 */

  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.24), 0px 2px 4px rgba(0, 0, 0, 0.16),
    0px -1px 1px rgba(0, 0, 0, 0.08);
  border-radius: 24px 0 24px 24px;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  align-self: center;
  flex-grow: 0;
`;

const GrpName = styled.div`
  display: flex;
  align-items: center;
  min-height: 50px;
  max-height: 80px;
  height: 5em;
  width: 100%;
  background: #090909;
  border: 1px solid transparent;
  border-radius: 0 0 20px 20px;
  p {
    font-family: Montserrat;
    margin: 0 0 0 30px;
    font-weight: 500;
    font-size: 40px;
  }
  // border: 1px solid red;
`;

const ChatInput = styled.div`
  width: 90%;
  background-color: #313131;
  margin: 10px 20px;
  height: 49px;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 85% 15%;
  padding: 0 0.4rem;
  position: relative;

  input {
    padding-left: 50px;
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    font-weight: 400;
    font-size: 1rem;
    color: white;
  }

  input::placeholder {
    color: #fofofo;
    font-weight: 500;
  }
`;
