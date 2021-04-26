/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let balanceCount = 0;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "L") {
      balanceCount++;
    } else {
      balanceCount--;
    }
    if (balanceCount === 0) {
      result++;
    }
  }

  return result;
};
