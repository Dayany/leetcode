/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  for (var i = 0; i < image.length; i++) {
    image[i] = flipPoint(image[i]);
    image[i] = reversePoint(image[i]);
  }
  return image;
};

const flipPoint = function (point) {
  let newPoint = [];
  for (var i = point.length - 1; i >= 0; i--) {
    newPoint.push(point[i]);
  }
  return newPoint;
};

const reversePoint = function (point) {
  let newPoint = [];
  for (var i = 0; i < point.length; i++) {
    newPoint.push(point[i] === 0 ? 1 : 0);
  }
  return newPoint;
};
