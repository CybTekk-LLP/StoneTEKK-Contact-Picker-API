import React from "react";
import Typography from "../Typography/Typography";
import styles from "./Anchor.module.css";

const Anchor = ({ href, text }) => {
  return (
    <a href={href} className={styles.anchor} target="_blank">
      <Typography text={text} _color="var(--correct-darker)" type={"body"}>
        {" "}
      </Typography>
    </a>
  );
};

export default Anchor;
