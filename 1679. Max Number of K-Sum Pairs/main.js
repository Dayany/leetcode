/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let map = {};
  let result = 0;

  for (var i = 0; i < nums.length; i++) {
    if (map[k - nums[i]] >= 1) {
      result++;
      map[k - nums[i]]--;
    } else {
      map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
    }
  }
  return result;
};
