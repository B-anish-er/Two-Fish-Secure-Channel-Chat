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
        border: "1px solid red",
        minHeight: "100vh",
        // minWidth: "600px",
      }}
      className="d-flex align-items-center"
    >
      <div
        style={{
          border: "1px solid yellow",
          minWidth: "600px",
          padding: "10%",
        }}
        className="m-auto"
      >
        <StyledLeftBubble>
          aoidfjajosdifaposfdnp oasdnfoasdndf osndfosadnfpo
        </StyledLeftBubble>
        <StyledRightBubble>
          aoidfjajosdifaposfdnp oasdnfoasdndf osndfosadnfpo
        </StyledRightBubble>
        <StyledRightBubble>
          aoidfjajosdifaposfdnp oasdnfoasdndf osndfosadnfpo
        </StyledRightBubble>
      </div>{" "}
    </Container>
  );
}

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

  color: #1868fb;
  background: #fff;
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

  background: #1868fb;
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
