import { ChangeEventHandler, FunctionComponent, KeyboardEventHandler, useEffect, useState } from "react";

import { InputContainerProps } from "../InputContainer";
import { TextInput } from "../TextInput";

import styles from './NumberInput.module.scss';

export type NumberInputProps = InputContainerProps & React.InputHTMLAttributes<HTMLInputElement> & {
  min: number;
  max: number;
  defaultValue?: number;
}

export const NumberInput: FunctionComponent<NumberInputProps> = ({
  id,
  label,
  min,
  max,
  defaultValue = 0,
  ...htmlInputProps
}) => {
  const [value, setValue] = useState<number | undefined>(defaultValue);
  const incrementState = () => setValue((prev) => Math.min((prev || 0) + 1, max));
  const decrementState = () => setValue((prev) => Math.max((prev || 0) - 1, min));

  const onBlur = () => {
    if (value === undefined) {
      if (defaultValue !== undefined) {
        setValue(defaultValue);
      }
      return;
    }
    const numberValue = Number(value);
    if (isNaN(numberValue)) {
      setValue(defaultValue);
    } else if (numberValue < min) {
      setValue(Math.max(min, numberValue));

    } else if (numberValue > max) {
      setValue(Math.min(max, numberValue));
    }
  }

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
 
    const numberValue = Number(e.target.value);

    if (isNaN(numberValue) || e.target.value === '') {
      setValue(undefined);
      return;
    }
    setValue(numberValue);
  }


  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      incrementState();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      decrementState();
    }
  }

  useEffect(() => {
    console.log(`NumberInput ${id} value: ${value}`);
  });

  const minusButton = (
    <button className={styles.numberInputButton} onClick={decrementState}>-</button>
  )
  const plusButton = (
    <button className={styles.numberInputButton} onClick={incrementState}>+</button>
  )

  return (
      <TextInput
        type="number"
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onChange={onChange}
        className={styles.numberInput}
        leftAction={minusButton}
        rightAction={plusButton}
        {...{ id, label, min, max, value }}
        {...htmlInputProps}
      />
  );
}