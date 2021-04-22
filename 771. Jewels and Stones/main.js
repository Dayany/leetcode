/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let result = 0;

  for (var i = 0; i < jewels.length; i++) {
    let match = stones.match(new RegExp(jewels.charAt(i), "g") || []);
    if (match) {
      result += parseInt(match.length);
    }
  }
  return result;
};
