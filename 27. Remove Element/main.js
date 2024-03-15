/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  var moveLeft = 0;
  var rightPointer = 0;
  while (rightPointer < nums.length) {
    if (nums[rightPointer] !== val) {
      nums[moveLeft] = nums[rightPointer];
      moveLeft++;
    }
    rightPointer++;
  }
  return moveLeft;
};
