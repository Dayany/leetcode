/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  let result;
  for (var i = 0; i < n; i++) {
    if (result) {
      result ^= start + 2 * i;
    } else {
      result = start + 2 * i;
    }
  }
  return result;
};
