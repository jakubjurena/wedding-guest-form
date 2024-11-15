import { FunctionComponent, PropsWithChildren } from "react";

import styles from './FormSection.module.scss';

export type FormSectionProps = PropsWithChildren<{
  title: string;
}>

export const FormSection: FunctionComponent<FormSectionProps> = ({
  title,
  children,
}) => {
  return (
    <section className={styles.formSection}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
