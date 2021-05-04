/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let result = 0;
  for (let i = 0; i < mat.length; i++) {
    let lastFromRow = mat.length - 1 - i;
    if (i === lastFromRow) {
      result += mat[i][i];
    } else {
      result += mat[i][i];
      result += mat[i][lastFromRow];
    }
  }
  return result;
};
