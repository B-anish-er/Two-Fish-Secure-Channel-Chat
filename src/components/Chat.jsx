import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import axios from "axios";
import "./Chat.css";
// import { Link } from "react-router-dom";

// import InputField from "./InputField";

import authContext from "../context/auth/authContext";
import ConnectContext from "../context/connect/connectContext";
import { twofish } from "twofish";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

// import * as Chats from "../chatExample.json";

export default function Chat({ Key }) {
  const [messages, setMessages] = useState(null);
  const [typedMessage, setTypedMessage] = useState("");
  const { user } = useContext(authContext);
  const { selectedConnection } = useContext(ConnectContext);

  const sendMessages = async () => {
    var IV = [
      0xb4, 0x6a, 0x02, 0x60, 0xb0, 0xbc, 0x49, 0x22, 0xb5, 0xeb, 0x07, 0x85,
      0xa4, 0xb7, 0xcc, 0x9e,
    ];
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { name } = user;
    const time = Date.now();
    if (!typedMessage) {
      console.log("Message is null");
      return;
    }
    if (!Key) {
      console.log("Key is null");
      return;
    }
    let messageByteArray = twofish(IV).stringToByteArray(typedMessage);
    let keyByteArray = twofish(IV).stringToByteArray(Key);
    let messageEncrypted = twofish(IV).encryptCBC(
      keyByteArray,
      messageByteArray
    );
    const chat = {
      time,
      name,
      messageEncrypted,
    };
    // console.log(messageEncrypted);
    try {
      const res = await axios.post(
        `http://localhost:8000/api/createmessage`,
        { username: name, connectname: selectedConnection, chat: chat },
        config
      );
      console.log(res.data);
      if (res.data.msg === "err")
        // setState((prevValue) => ({ ...prevValue, error: res.data.error }));
        console.log(res.data.err);
      else setMessages((prevValue) => [...prevValue, chat]);
    } catch (err) {
      // setState((prevValue) => ({ ...prevValue, error: err }));
      console.log(err);
      setMessages((prevValue) => [...prevValue, chat]);
    }
  };

  useEffect(() => {
    var IV = [
      0xb4, 0x6a, 0x02, 0x60, 0xb0, 0xbc, 0x49, 0x22, 0xb5, 0xeb, 0x07, 0x85,
      0xa4, 0xb7, 0xcc, 0x9e,
    ];
    const getMessages = async () => {
      try {
        const res = await axios.post("http://localhost:8000/api/messages", {
          username: user.name,
          connectname: selectedConnection,
        });
        setMessages(res.data.messages);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
    messages &&
      messages.length !== 0 &&
      messages.map((value) => {
        let plainMessage = twofish(IV).decryptCBC(Key, value.message);
        return { ...value, message: plainMessage };
      });
  }, [Key, messages, selectedConnection, user.name]);

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
          <p>{selectedConnection}</p>
        </GrpName>
        <Scrollable className="m-auto">
          <StyledLeftBubble>Hi</StyledLeftBubble>
          <StyledRightBubble>Hello</StyledRightBubble>
          <StyledRightBubble>Never gonna let you go</StyledRightBubble>
          <StyledLeftBubble>Never gonna let you down</StyledLeftBubble>
          {messages &&
            messages.length !== 0 &&
            messages.map((message) => {
              return message.speaker === user.name ? (
                <StyledRightBubble>message.messages</StyledRightBubble>
              ) : (
                <StyledLeftBubble>message.messages</StyledLeftBubble>
              );
            })}
          {/* {console.log(JSON.stringify(messages))} */}
        </Scrollable>{" "}
        <ChatInput>
          <input
            placeholder="Type Your Message"
            // value={typedMessage}
            onChange={(e) => setTypedMessage(e.target.value)}
          ></input>
          <button
            onClick={() => sendMessages()}
            // style={{ all: "unset" }}
          >
            <FontAwesomeIcon icon={faPaperPlane} />
            Send
          </button>
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
