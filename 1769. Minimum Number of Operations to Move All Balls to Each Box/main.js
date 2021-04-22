/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  let result = [];
  let ballInBoxes = [];
  for (var i = 0; i < boxes.length; i++) {
    if (boxes[i] === 1) {
      ballInBoxes.push(i);
    }
  }

  for (var i = 0; i < boxes.length; i++) {
    let moveCount = 0;
    for (var j = 0; j < ballInBoxes.length; j++) {
      moveCount += Math.abs(i - ballInBoxes[j]);
    }
    result.push(moveCount);
  }

  return result;
};
