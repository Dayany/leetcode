/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var moveLeft = 0;
  var rightPointer = 0;
  while (rightPointer < nums.length) {
    if (nums[rightPointer] !== nums[moveLeft]) {
      moveLeft++;
      nums[moveLeft] = nums[rightPointer];
    }
    rightPointer++;
  }
  return moveLeft + 1;
};
