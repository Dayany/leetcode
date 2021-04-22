/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  let result = 0;

  for (var i = 0; i < n.length; i++) {
    if (n.charAt(i) > result) {
      result = parseInt(n.charAt(i));
    }
  }
  return result;
};
