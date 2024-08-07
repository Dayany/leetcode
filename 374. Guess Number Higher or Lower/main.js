/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let floor = 0;
  let ceil = n;
  let half = Math.ceil(n / 2);

  while (true) {
    if (guess(half) === 1) {
      floor = half;
    } else if (guess(half) === -1) {
      ceil = half;
      half = Math.floor(half);
    } else if (guess(half) === 0) {
      return half;
    }
    half = Math.ceil((ceil + floor) / 2);
  }
};
