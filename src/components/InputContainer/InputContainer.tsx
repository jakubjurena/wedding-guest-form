import { FunctionComponent, PropsWithChildren } from "react";

export type InputContainerProps = PropsWithChildren<{
  id: string;
  label: string;
}>

export const InputContainer: FunctionComponent<InputContainerProps> = ({
  id,
  label,
  children,
}) => {
  return (
    <label>
      {label}
      <br />
      <span data-name={id}>
        {children}
      </span>
    </label>
  );
}