// * @param {number[][]} grid
// * @return {number}

var maxIncreaseKeepingSkyline = function (grid) {
  let result = 0;
  let rowMap = [];
  let columnMap = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (!rowMap[i] || rowMap[i] < grid[i][j]) {
        rowMap[i] = grid[i][j];
      }
      if (!columnMap[j] || columnMap[j] < grid[i][j]) {
        columnMap[j] = grid[i][j];
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let currentBuilding = grid[i][j];
      let currentMax = rowMap[i] <= columnMap[j] ? rowMap[i] : columnMap[j];
      if (currentMax > currentBuilding) {
        result += currentMax - currentBuilding;
      }
    }
  }
  return result;
};
