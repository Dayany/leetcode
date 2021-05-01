/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  let mask = 0;
  let found = false;
  for (var i = 0; i < num.toString().length; i++) {
    if (found) {
      mask *= 10;
    }
    if (num.toString().charAt(i) === "6" && !found) {
      found = true;
      mask = 3;
    }
  }
  return num + mask;
};
