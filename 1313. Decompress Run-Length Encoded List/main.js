/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  let result = [];

  for (let index = 0; index < nums.length; index += 2) {
    for (let i = 0; i < nums[index]; i++) {
      result.push(nums[index + 1]);
    }
  }
  return result;
};
