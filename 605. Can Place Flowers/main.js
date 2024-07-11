/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let remainingPlants = n;
  for (var i = 0; i < flowerbed.length; i++) {
    if (remainingPlants === 0) return true;
    if (flowerbed[i] === 1) continue;
    previousBed = flowerbed[i - 1] ? flowerbed[i - 1] : 0;
    nextBed = flowerbed[i + 1] ? flowerbed[i + 1] : 0;
    if (previousBed === 0 && nextBed === 0) {
      flowerbed[i] = 1;
      remainingPlants--;
    }
    if (remainingPlants === 0) return true;
  }
  return false;
};
