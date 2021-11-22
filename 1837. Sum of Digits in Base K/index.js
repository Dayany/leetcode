/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
  let numRadixResult = n.toString(k);
  let result = 0;
  for (let i = 0; i < numRadixResult.length; i++) {
    result += Number(numRadixResult.charAt(i));
  }
  return result;
};
