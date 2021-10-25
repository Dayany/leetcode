/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  let arrayLength = nums.length;
  for (let i = 0; i < arrayLength; i++) {
    nums.push(nums[i]);
  }
  return nums;
};
