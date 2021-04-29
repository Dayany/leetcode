/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function (queries, m) {
  let permutation = [];
  let result = [];
  for (var i = 1; i <= m; i++) {
    permutation.push(i);
  }
  for (var i = 0; i < queries.length; i++) {
    let currIndex = permutation.indexOf(queries[i]);
    permutation.splice(currIndex, 1);
    permutation.unshift(queries[i]);
    result.push(currIndex);
  }

  return result;
};
