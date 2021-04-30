/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  let stringToArray = s.split(" ");
  let result = "";

  for (let i = 0; i < k; i++) {
    if (i === 0) {
      result += stringToArray[i];
    } else {
      result += ` ${stringToArray[i]}`;
    }
  }
  return result;
};
