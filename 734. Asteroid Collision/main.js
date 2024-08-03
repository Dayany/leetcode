/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let stack = [];
  for (var i = 0; i < asteroids.length; i++) {
    let curr = asteroids[i];
    let last = stack[stack.length - 1];

    if (!stack.length || last < 0 || curr > 0) {
      stack.push(curr);
    } else if (Math.abs(curr) === Math.abs(last)) {
      stack.pop();
    } else if (Math.abs(curr) > Math.abs(last)) {
      stack.pop();
      i--;
    }
  }
  return stack;
};
