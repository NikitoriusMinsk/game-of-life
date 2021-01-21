import React from "react";

function Cell(props) {
  function cellOnClick() {
    document.getElementById(`${props.row}_${props.col}`).className =
      "cell alive";
    props.grid[props.row][props.col] = true;
  }

  return (
    <div className={props.cellClass} id={props.cellId} onClick={cellOnClick} />
  );
}

export default Cell;
