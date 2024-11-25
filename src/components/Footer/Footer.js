import React from "react";
import Anchor from "../Anchor/Anchor";
import Typography from "../Typography/Typography";
import styles from "./Footer.module.css";

const Footer = ({ text, url, link }) => {
  return (
    <footer className={styles.footer}>
      <Typography text={text} type="body" _fontweight={300} />
      <Anchor href={url} text={link}></Anchor>
    </footer>
  );
};

export default Footer;
