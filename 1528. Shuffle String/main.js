/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  let result = [];
  for (var i = 0; i < indices.length; i++) {
    result[indices[i]] = s.charAt(i);
  }
  return result.toString().replace(new RegExp(",", "g"), "");
};
