import React from "react";
import { bool, string } from "prop-types";
import { StyledInputField } from "./InputField.styled";

function InputField(props) {
  return (
    <StyledInputField>
      <span></span>
      <input {...props} />
    </StyledInputField>
  );
}

InputField.propTypes = {
  required: bool,
  type: string.isRequired,
  name: string.isRequired,
  id: string,
  placeholder: string,
};

InputField.defaultProps = {
  required: false,
};

export default InputField;
