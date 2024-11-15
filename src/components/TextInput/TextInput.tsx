import styles from './TextInput.module.scss';
import { InputContainer, InputContainerProps } from "../InputContainer";

export type TextInputPros = InputContainerProps & React.InputHTMLAttributes<HTMLInputElement>

import { forwardRef } from "react";

export const TextInput = forwardRef<HTMLInputElement, TextInputPros>(({
  id,
  label,
  leftAction,
  rightAction,
  className,
  ...htmlInputProps
}, ref) => {
  return (
    <InputContainer {...{ id, label, leftAction, rightAction }}>
        <input ref={ref} id={id} className={[className, styles.textInput].filter(a => a !== undefined).join(" ")} type="text" {...htmlInputProps} />
    </InputContainer>
  );
});