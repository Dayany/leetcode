/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let answer = [];
  let prefix = 1;
  for (var i = 0; i < nums.length; i++) {
    answer.push(prefix);
    prefix *= nums[i];
  }
  let postfix = 1;
  for (var i = nums.length - 1; i >= 0; i--) {
    answer[i] = answer[i] * postfix;
    postfix = postfix * nums[i];
  }
  return answer;
};
