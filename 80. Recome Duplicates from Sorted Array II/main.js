/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var moveLeft = 0;
  var duplicatesList = {};
  var rightPointer = 1;

  while (rightPointer < nums.length) {
    if (
      nums[rightPointer] !== nums[moveLeft] ||
      !duplicatesList[nums[rightPointer]]
    ) {
      if (nums[rightPointer] == nums[moveLeft]) {
        duplicatesList[nums[rightPointer]] = true;
      }

      nums[moveLeft + 1] = nums[rightPointer];

      moveLeft++;
    }
    rightPointer++;
  }
  return moveLeft + 1;
};
