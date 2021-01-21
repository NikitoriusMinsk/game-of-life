function countNeighbours(i, j, grid) {
  var neighbourCount=0;
  for (let ni = i - 1; ni <= i + 1; ni++) {
    for (let nj = j - 1; nj <= j + 1; nj++) {
      try {
        if (ni === i && nj === j) {
            continue;
        }
        if (grid[ni][nj] === true) {
            neighbourCount++;
        }
      } catch (error) {
        continue;
      }
    }
  }
  return neighbourCount;
}

export default countNeighbours;
