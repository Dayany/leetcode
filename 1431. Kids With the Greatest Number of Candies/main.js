/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let result = [];
  const greatestNumberCandies = Math.max.apply({}, candies);
  candies.forEach((candy) => {
    let sum = candy + extraCandies;
    if (sum >= greatestNumberCandies) {
      result.push(true);
    } else {
      result.push(false);
    }
  });
  return result;
};
