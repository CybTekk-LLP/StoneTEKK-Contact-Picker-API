import React from "react";
import Typography from "../Typography/Typography";
import styles from "./EmptyState.module.css";
import emptyState from "./../../images/EmptyState.svg";

const EmptyState = ({ text }) => {
  return (
    <div className={styles.emptyState}>
      <img src={emptyState} alt=""></img>
      <br />
      <br />
      <Typography text={text} _color="var(--primary-dark)" type={"body"}>
        {" "}
      </Typography>
    </div>
  );
};

export default EmptyState;
