/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  let xPoints = [];
  let result = 0;
  points.map((point) => xPoints.push(point[0]));
  let orderedXPoints = xPoints.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < orderedXPoints.length - 1; i++) {
    let diff = Math.abs(orderedXPoints[i] - orderedXPoints[i + 1]);
    if (diff > result) result = diff;
  }
  return result;
};
