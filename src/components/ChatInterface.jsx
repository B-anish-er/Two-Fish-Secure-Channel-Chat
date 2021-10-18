import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function Chat() {
    return (
        <div
        style={{
            display: 'flex',
            background: 'black',
            flexDirection: 'row',
            justifyContent: 'center',
            width: "100%",
            height: "100vh",
            // border: "10px solid blue",
          }}
        >

                <Right>
                    <GrpName>
                        <p>Some Name</p>
                    </GrpName>
                    <ChatContainer>

                    </ChatContainer>
                    <ChatInput>
                        <input placeholder="Type Your Message"></input>
                        <p>send icon</p>
                    </ChatInput>
                </Right>
        </div>
    );
}
const Right = styled.div`
    width: 75%;
    display:flex;
    flex-direction: column;
    color:#000000;
    height:100vh;
    background: url(../chatbg.png);
    background-size: cover;
    background-position: center;
`
const GrpName = styled.div`
    display: flex;
    align-items: center;
    min-height: 50px;
    max-height: 80px;
    height: 8%;
    width: 100%;
    background:#090909;
    border: 1px solid transparent;
    border-radius: 0 0 30px 30px;
    p{
        font-family: Montserrat;
        margin: 0 0 0 30px ;
        font-weight: 500;
    }
`

const ChatContainer = styled.div`
    height:100%;
    width: 100%;
    background:none;
    margin-top:10px;
    padding:10px;
`

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
    padding-left:50px;
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
`
