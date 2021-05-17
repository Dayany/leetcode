/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  let result = 0;
  for (var i = 0; i < nums.length; i++) {
    let duplicates = false;
    for (var j = 0; j < nums.length; j++) {
      if (j === i) {
        continue;
      }
      if (nums[j] === nums[i]) {
        duplicates = true;
      }
    }
    if (!duplicates) {
      result += nums[i];
    }
  }

  return result;
};
