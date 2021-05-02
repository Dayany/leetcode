/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  let result = [];
  for (let i = 0; i < prices.length - 1; i++) {
    let found = false;
    for (var j = i + 1; j < prices.length; j++)
      if (prices[i] >= prices[j]) {
        result.push(prices[i] - prices[j]);
        found = true;
        break;
      }
    if (j === prices.length && !found) {
      result.push(prices[i]);
    }
  }

  result.push(prices[prices.length - 1]);

  return result;
};
