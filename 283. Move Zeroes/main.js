/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {}; /**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let startPointer = 0;
  let nextPointer = 1;

  while (startPointer < nextPointer) {
    if (nextPointer >= nums.length) return;
    if (nums[startPointer] !== 0) {
      startPointer++;
      nextPointer = startPointer + 1;
      continue;
    }
    if (nums[startPointer] === 0 && nums[nextPointer] !== 0) {
      nums[startPointer] = nums[nextPointer];
      nums[nextPointer] = 0;
      continue;
    }

    nextPointer++;
  }
};
