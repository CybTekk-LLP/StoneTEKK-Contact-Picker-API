import React from "react";
import Typography from "../Typography/Typography";

const ContextMenu = (
  text,
  textDanger,
  textColor,
  textColorDanger,
  editContact,
  deleteContact
) => {
  return (
    <div>
      <button onClick={editContact}>
        <Typography text={text} _color={textColor} type={"caption"}>
          {" "}
        </Typography>
      </button>
      <button onClick={deleteContact}>
        <Typography text={textDanger} _color={textColorDanger} type={"caption"}>
          {" "}
        </Typography>
      </button>
    </div>
  );
};

export default ContextMenu;
