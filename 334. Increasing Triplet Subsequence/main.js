/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  if (nums.length < 2) return false;

  let lowest = nums[0];
  let middle = nums[1];
  for (var i = 2; i < nums.length; i++) {
    if (lowest >= middle) {
      lowest = middle;
      middle = nums[i];
    } else if (lowest >= nums[i]) {
      lowest = nums[i];
    } else if (middle >= nums[i]) {
      middle = nums[i];
    } else {
      return true;
    }
  }
  return false;
};
