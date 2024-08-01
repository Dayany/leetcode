/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  let result = 0;
  let hash = {};
  for (var i = 0; i < grid.length; i++) {
    let curr = [];
    for (var j = 0; j < grid.length; j++) {
      curr.push(grid[i][j]);
    }
    hash[curr] = hash[curr] ? hash[curr] + 1 : 1;
  }

  for (var i = 0; i < grid.length; i++) {
    let curr = [];
    for (var j = 0; j < grid.length; j++) {
      curr.push(grid[j][i]);
    }
    if (curr in hash) result += hash[curr];
  }
  return result;
};
