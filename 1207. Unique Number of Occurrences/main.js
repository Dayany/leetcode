/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = map[arr[i]] + 1 || 1;
  }
  const valuesArr = Object.values(map);
  const setUniqueNumbers = [...new Set(valuesArr)];
  return setUniqueNumbers.length === valuesArr.length;
};
