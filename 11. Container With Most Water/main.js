/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let lowestPointer = 0;
  let highestPointer = height.length - 1;
  let result = 0;

  while (lowestPointer < highestPointer) {
    let lowestHeight =
      height[lowestPointer] < height[highestPointer]
        ? height[lowestPointer]
        : height[highestPointer];

    let width = highestPointer - lowestPointer;
    let area = lowestHeight * width;

    if (area > result) {
      result = area;
    }
    if (height[lowestPointer] > height[highestPointer]) {
      highestPointer--;
    } else {
      lowestPointer++;
    }
  }

  return result;
};
