/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var check32bit = +String(Math.abs(x)).split("").reverse().join("");

  if (check32bit > 0x7fffffff) {
    return 0;
  }
  let digits = x.toString().length;
  let result = 0;
  let negative = false;
  if (x * -1 > 0) {
    x = x * -1;
    negative = true;
  }
  for (var i = digits - 1; i >= 0; i--) {
    if (i === 0 && parseInt(x.toString().charAt(i)) === 0) {
      continue;
    }
    if (result === 0) {
      result = `${x.toString().charAt(i)}`;
      continue;
    }

    result = `${result}${x.toString().charAt(i)}`;
  }
  result = parseInt(result);
  if (negative) {
    result = result * -1;
  }
  return result;
};
