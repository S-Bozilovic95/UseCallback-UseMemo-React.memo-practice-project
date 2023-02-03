import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  console.log("radi dugme");
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

// React.memo() ne reaguje na funkcije, nizove i objekte
// jer su reference value, odnosno njihovim podacima ne pristupamo direktno
// nego preko reference object.prop

export default React.memo(Button);
