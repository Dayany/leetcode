/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  var majorityCount = {};
  for (var i = 0; i < nums.length; i++) {
    var currentNumber = nums[i];
    majorityCount[currentNumber] = majorityCount[currentNumber]
      ? majorityCount[currentNumber] + 1
      : 1;
  }
  var highestRepetition = 0;
  var result;
  for (var key in majorityCount) {
    var currentCount = majorityCount[key];
    if (highestRepetition < currentCount) {
      highestRepetition = currentCount;
      result = key;
    }
  }
  return result;
};
