/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let result = 0;
  while (0 < num) {
    result++;
    if (num % 2 == 0) {
      num = num / 2;
    } else {
      num--;
    }
  }

  return result;
};
