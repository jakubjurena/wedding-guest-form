import { FunctionComponent, PropsWithChildren } from "react";

export type ActionButtonProps = PropsWithChildren<{
  title?: string;
  onClick: () => void;
}>

export const ActionButton: FunctionComponent<ActionButtonProps> = ({
  title,
  onClick,
  children,
}) => {
  return (
    <button onClick={onClick}>
      {title}
      {children}
    </button>
  );
}