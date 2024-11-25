import React from "react";
import Typography from "../Typography/Typography";
import emptyState from "./../../images/EmptyState.svg";
import styles from "./EmptyState.module.css";

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
