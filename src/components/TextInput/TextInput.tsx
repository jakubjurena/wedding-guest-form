import { FunctionComponent } from "react";

import styles from './TextInput.module.scss';
import { InputContainer, InputContainerProps } from "../InputContainer";

export type TextInputPros = InputContainerProps & React.InputHTMLAttributes<HTMLInputElement>

export const TextInput: FunctionComponent<TextInputPros> = ({
  id,
  label,
  ...htmlInputProps
}) => {
  return (
    <InputContainer {...{ id, label }}>
        <input className={styles.textInput} type="text" {...htmlInputProps} />
    </InputContainer>
  );
}