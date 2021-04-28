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
  console.log(orderedXPoints);
  for (let i = 0; i < orderedXPoints.length - 1; i++) {
    let diff = Math.abs(orderedXPoints[i] - orderedXPoints[i + 1]);
    console.log(diff);
    if (diff > result) result = diff;
  }
  return result;
};
