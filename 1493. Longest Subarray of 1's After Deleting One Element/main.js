/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let left = 0;
  let right = 0;
  let deleted = 0;
  let result = 0;

  while (right < nums.length) {
    if (nums[right] === 1) {
      right++;
    } else if (deleted === 0) {
      right++;
      deleted++;
    } else {
      if (nums[left] === 0) {
        deleted--;
      }
      left++;
    }
    result = right - left > result ? right - left : result;
  }
  return result - 1;
};
