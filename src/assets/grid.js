import React from "react";
import Cell from "./cell";

function CellGrid(props) {
  const width = props.cols * 15;
  var rowsArray = [];

  var cellClass = "";
  for (let i = 0; i < props.rows; i++) {
    for (let j = 0; j < props.cols; j++) {
      let cellId = i + "_" + j;

      cellClass = props.grid[i][j] ? "cell alive" : "cell dead";
      rowsArray.push(
        <Cell
          cellClass={cellClass}
          key={cellId}
          cellId={cellId}
          row={i}
          col={j}
          grid={props.grid}
        />
      );
    }
  }

  return (
    <div className="cellGrid" style={{ width: width }}>
      {rowsArray}
    </div>
  );
}

export default CellGrid;
