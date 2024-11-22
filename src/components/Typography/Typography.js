import React from "react";
import styles from "./Typography.module.css";

function Typography({
  text,
  type,
  renderInline = false,
  disabled = false,
  _color,
  _fontweight,
}) {
  return (
    <span
      className={`${styles.typography} ${styles[type]} ${
        !renderInline && styles.block
      } ${disabled && styles.disabled}`}
      style={{ color: _color, fontWeight: _fontweight }}
    >
      {text}
    </span>
  );
}

export default Typography;
