import React from "react";
import InputMask from "react-input-mask";
import { TextFieldStyled } from "../TextField/TextField.styles";
import { OutlinedTextFieldProps } from "@mui/material";

export interface TextFieldMaskProps extends OutlinedTextFieldProps {
  mask: string;
  value: string;
}

const TextFieldMask: React.FC<TextFieldMaskProps> = ({
  mask,
  value,
  onChange,
  ...props
}) => {
  return (
    <InputMask mask={mask} value={value} onChange={onChange}>
      {() => {
        return <TextFieldStyled {...props} />;
      }}
    </InputMask>
  );
};

export default TextFieldMask;
