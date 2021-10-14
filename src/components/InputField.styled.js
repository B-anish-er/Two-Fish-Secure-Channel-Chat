import styled from "styled-components";

export const StyledInputField = styled.div`
  max-width: 500px;
  width: 100%;
  background-color: #f0f0f0;
  margin: 10px 0 20px;
  height: 49px;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 0.4rem;
  position: relative;

  input {
    background: none;
    margin: 10px;
    outline: none;
    border: none;
    line-height: 1;
    font-weight: 600;
    font-size: 1rem;
    color: #333;
  }

  input::placeholder {
    color: #aaa;
    font-weight: 500;
  }
`;
