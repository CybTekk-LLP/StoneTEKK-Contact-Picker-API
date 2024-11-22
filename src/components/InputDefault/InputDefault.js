import React, { useState } from "react";
import styles from "./InputDefault.module.css";
import Typography from "../Typography/Typography";

const InputDefault = ({
  type,
  inputLabel,
  placeholder,
  autoComplete,
  _inputMode,
  handleValue,
  index,
}) => {
  const [value, setValue] = useState();

  const handleInput = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    handleValue(inputValue);
  };

  return (
    <div className={styles.customInput}>
      <label className={styles.inputLabel} htmlFor={"input" + type + index}>
        <Typography text={inputLabel} />
      </label>
      <input
        className={`${styles.inputField} ${styles[type]}`}
        type={type || "text"}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={_inputMode || "text"}
        value={value}
        onInput={handleInput}
        id={"input" + type + index}
      />
    </div>
  );
};

export default InputDefault;
