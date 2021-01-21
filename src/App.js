import React from "react";
import CellGrid from "./assets/grid";
import Button from "./assets/button";
import countNeighbours from "./assets/scripts";

function App() {
  const speed = 500;
  const rows = 50;
  const cols = 50;

  let grid = Array(rows)
    .fill()
    .map(() => Array(cols).fill(false));
  let intervalId;

  function stop() {
    clearInterval(intervalId);
    console.log("Stopped interval");
  }

  function start() {
    intervalId = setInterval(function () {
      //update grid and logic here
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          var neighbourCount = countNeighbours(i, j, grid);
          console.log(`cell ${i}_${j} is ${grid[i][j] ? "alive" : "dead"}. neighbours: ${neighbourCount}`);
          if (grid[i][j] === true) {
            //check neighbors
            //2-3 alive
            //1,3+ dead
            if (neighbourCount < 2 || neighbourCount > 3) {
              console.log(`cell ${i}_${j} died.`);
              grid[i][j] = false;
              document.getElementById(`${i}_${j}`).className = "cell dead";
            }
          } else {
            if (neighbourCount === 3) {
              console.log(`cell ${i}_${j} was born`);
              grid[i][j] = true;
              document.getElementById(`${i}_${j}`).className = "cell alive";
            }
          }
        }
      }
    }, speed);
  }

  return (
    <div className="wrapper">
      <h1>Game of Life</h1>
      <CellGrid grid={grid} rows={rows} cols={cols}></CellGrid>
      <div className="inputs">
        <Button click={start} text={"Start"}></Button>
        <Button click={stop} text={"Stop"}></Button>
      </div>
    </div>
  );
}

export default App;
