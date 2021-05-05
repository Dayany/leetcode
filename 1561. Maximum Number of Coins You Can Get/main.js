/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
  piles.sort((a, b) => b - a);
  let result = 0;
  let numberOfPiles = (2 * piles.length) / 3;
  let index = 1;
  while (index < numberOfPiles) {
    result += piles[index];
    index += 2;
  }

  return result;
};
