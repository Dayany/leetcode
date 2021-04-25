/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let positionKey = [];
  positionKey["type"] = 0;
  positionKey["color"] = 1;
  positionKey["name"] = 2;
  let result = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i][positionKey[ruleKey]] === ruleValue) {
      result++;
    }
  }

  return result;
};
