/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  let result = [];
  for (var i = 0; i < nums.length; i++) {
    result.splice(index[i], 0, num[i]);
  }
  return result;
};
