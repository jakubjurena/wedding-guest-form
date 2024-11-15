import { FunctionComponent } from "react";

import { InputContainer, InputContainerProps } from "../InputContainer";

export type TextAreaInputPros = InputContainerProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>

export const TextAreaInput: FunctionComponent<TextAreaInputPros> = ({
  id,
  label,
  leftAction,
  rightAction,
  ...textAreaInputProps
}) => {
  return (
    <InputContainer {...{ id, label, leftAction, rightAction }}>
        <textarea {...textAreaInputProps} />
    </InputContainer>
  );
}