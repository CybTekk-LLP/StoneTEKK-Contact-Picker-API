import React, { useState } from "react";
import Typography from "../Typography/Typography";
import styles from "./Toast.module.css";
import close from "./../../images/Close.svg";
import failure from "./../../images/Failure.svg";
import success from "./../../images/Success.svg";

const Toast = ({ title, description, type }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={`${styles.toast} ${!isVisible && styles.out}`}>
      <img src={type === "success" ? success : failure} alt="" />
      <div>
        <Typography
          text={title}
          _color="var(--primary-active)"
          type={"impact"}
        />
        <Typography
          text={description}
          _color="var(--primary-dark)"
          type={"body"}
        />
      </div>
      <button onClick={handleClose}>
        <img src={close} alt="close" />
      </button>
    </div>
  );
};

export default Toast;
