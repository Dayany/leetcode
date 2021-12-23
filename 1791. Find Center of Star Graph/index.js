var findCenter = function (edges) {
  let pointOne = edges[0][0];
  let pointTwo = edges[0][1];
  for (var i = 1; i < edges.length; i++) {
    if (pointOne === edges[i][0] || pointOne === edges[i][1]) {
      return pointOne;
    }
    if (pointTwo === edges[i][0] || pointTwo === edges[i][1]) {
      return pointTwo;
    }
  }
};
