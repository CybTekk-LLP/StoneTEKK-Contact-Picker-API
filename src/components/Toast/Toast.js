import React from "react";
import Typography from "../Typography/Typography";
import styles from "./Toast.module.css";

const Toast = ({ title, description, type }) => {
  return (
    <div className={styles.toast}>
      <img src={type === "success" ? "success.svg" : "failure.svg"} alt="" />
      <Typography text={title} _color="var(--primary-active)" type={"impact"}>
        {" "}
      </Typography>
      <Typography text={description} _color="var(--primary-dark)" type={"body"}>
        {" "}
      </Typography>
      <button>
        <img src="close.svg" alt="close" />
      </button>
    </div>
  );
};

export default Toast;
