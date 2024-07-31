/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let left = 0;
  let right = 0;
  let nOfFlips = 0;
  let result = 0;
  while (right <= nums.length) {
    if (nOfFlips <= k) {
      result = right - left > result ? right - left : result;
    }
    if (nums[right] === 1) {
      right++;
      continue;
    }
    if (nOfFlips <= k) {
      if (nums[right] === 0) {
        nOfFlips++;
      }
      right++;
    } else {
      if (nums[left] === 0) {
        nOfFlips--;
      }
      left++;
      if (left > right) {
        right = left;
      }
    }
  }
  return result;
};
