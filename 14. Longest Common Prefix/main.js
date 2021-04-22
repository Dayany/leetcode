/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs[0]) return "";
  let longestPrefix = "";
  let charNotEqual = false;
  for (var i = 0; i < strs[0].length; i++) {
    if (charNotEqual) return longestPrefix;
    let currentChar = strs[0].charAt(i);
    for (var j = 1; j < strs.length; j++) {
      if (currentChar !== strs[j].charAt(i)) {
        charNotEqual = true;
        break;
      }
    }
    if (!charNotEqual) {
      longestPrefix += currentChar;
    }
  }
  return longestPrefix;
};
