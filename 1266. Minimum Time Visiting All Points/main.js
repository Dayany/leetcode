/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  let stepCount = 0;

  for (let i = 0; i < points.length - 1; i++) {
    let currentPoint = points[i];
    let goalPoint = points[i + 1];

    while (
      currentPoint[0] !== goalPoint[0] ||
      currentPoint[1] !== goalPoint[1]
    ) {
      if (currentPoint[0] > goalPoint[0]) {
        currentPoint[0] = currentPoint[0] - 1;
      } else if (currentPoint[0] < goalPoint[0]) {
        currentPoint[0] = currentPoint[0] + 1;
      }

      if (currentPoint[1] > goalPoint[1]) {
        currentPoint[1] = currentPoint[1] - 1;
      } else if (currentPoint[1] < goalPoint[1]) {
        currentPoint[1] = currentPoint[1] + 1;
      }
      stepCount++;
    }
  }
  return stepCount;
};
