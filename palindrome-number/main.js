/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  var lastDigit = x.toString().length - 1;

  for (var i = 0; i <= Math.floor(x.toString().length / 2); i++) {
    if (x.toString().charAt(i) !== x.toString().charAt(lastDigit)) return false;
    lastDigit--;
  }
  return true;
};
