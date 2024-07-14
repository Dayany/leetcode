/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let currentSum = 0;
  let highestSum = 0;
  for (var i = 0; i < k; i++) {
    currentSum += nums[i];
  }
  highestSum = currentSum;
  for (var i = 1; i + k - 1 < nums.length; i++) {
    currentSum -= nums[i - 1];
    currentSum += nums[i + k - 1];
    if (currentSum > highestSum) {
      highestSum = currentSum;
    }
  }

  return highestSum / k;
};
