import React from "react";
import Typography from "../Typography/Typography";
import styles from "./Button.module.css";

const Button = ({
  text,
  type,
  textColor,
  handleClick,
  _btnType,
  _disabled = false,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[type]}`}
      onClick={handleClick}
      type={_btnType}
      disabled={_disabled}
    >
      <Typography text={text} _color={textColor} type={"caption"}>
        {" "}
      </Typography>
    </button>
  );
};

export default Button;
