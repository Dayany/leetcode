/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let result = nums[0];
  let currentSum = nums[0];

  for (var i = 1; i < nums.length; i++) {
    let currentElement = nums[i];
    currentSum += currentElement;

    if (currentSum < currentElement) {
      currentSum = currentElement;
    }

    if (result < currentSum) {
      result = currentSum;
    } else if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return result;
};
