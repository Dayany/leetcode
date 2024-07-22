/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let totalSum = 0;

  for (var i = 0; i < nums.length; i++) {
    totalSum += nums[i];
  }

  let pointer = 0;
  let sum = 0;
  while (pointer < nums.length) {
    totalSum -= nums[pointer];
    if (sum === totalSum) {
      return pointer;
    }

    sum += nums[pointer];
    pointer++;
  }
  return -1;
};
