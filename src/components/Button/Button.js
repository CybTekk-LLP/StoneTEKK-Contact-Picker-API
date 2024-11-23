import React from "react";
import Typography from "../Typography/Typography";
import styles from "./Button.module.css";

const Button = ({ text, type, textColor, handleClick, _btnType }) => {
  return (
    <button
      className={`${styles.button} ${styles[type]}`}
      onClick={handleClick}
      type={_btnType}
    >
      <Typography text={text} _color={textColor} type={"caption"}>
        {" "}
      </Typography>
    </button>
  );
};

export default Button;
