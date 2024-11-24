import React from "react";
import Typography from "../Typography/Typography";
import styles from "./Card.module.css";
import context from "./../../images/Dots.svg";

const Card = ({ src, name, tel, address, openMenu }) => {
  return (
    <article className={styles.card}>
      <img src={src} alt={`Retailer: ${name}`}></img>
      <div>
        <Typography text={name} _color="var(--primary-dark)" type={"caption"}>
          {" "}
        </Typography>
        <Typography text={tel} _color="var(--placeholder)" type={"body"}>
          {" "}
        </Typography>
        <Typography text={address} _color="var(--placeholder)" type={"body"}>
          {" "}
        </Typography>
      </div>
      <button onClick={openMenu}>
        <img src={context} alt="context menu" />{" "}
      </button>
    </article>
  );
};

export default Card;
