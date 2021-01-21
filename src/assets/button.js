import React from "react";

function Button(props) {
  return <input type="button" value={props.text} onClick={props.click}></input>;
}

export default Button;
