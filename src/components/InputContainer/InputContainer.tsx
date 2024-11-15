import { FunctionComponent, PropsWithChildren } from "react";

import styles from './InputContainer.module.scss';

export type InputContainerProps = PropsWithChildren<{
  id: string;
  label?: string;
  leftAction?: JSX.Element;
  rightAction?: JSX.Element;
}>

export const InputContainer: FunctionComponent<InputContainerProps> = ({
  id,
  label,
  leftAction,
  rightAction,
  children,
}) => {
  return (
    <span className={styles.inputContainer}>
      <label htmlFor={id}>
        {label}
      </label>
      <span className={styles.inputInnerContainer} data-name={id}>
        {leftAction ? leftAction : null}
        {children}
        {rightAction ? rightAction : null}
      </span>
    </ span>
  );
}