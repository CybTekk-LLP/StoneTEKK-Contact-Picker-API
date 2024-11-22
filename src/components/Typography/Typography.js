import React from "react";
import "./Typography.css";

function Typography({
  text,
  type,
  renderInline = false,
  disabled = false,
  _color,
  _fontweight,
}) {
  return (
    <>
      <span
        className={`typography ${type} ${!renderInline && "block"} ${
          disabled && "disabled"
        }`}
        style={{ color: _color, fontWeight: _fontweight }}
      >
        {text}
      </span>
    </>
  );
}

export default Typography;
