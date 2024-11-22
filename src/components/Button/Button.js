import React from 'react'
import Typography from "../Typography/Typography";
import styles from "./Button.module.css"


function Button({ text, type, textColor, handleClick }) {
    return (
        <button className={`${styles.button} ${styles[type]}`}><Typography text={text} _color={textColor} type={"caption"} onClick={handleClick}> </Typography></button>
    )
}

export default Button