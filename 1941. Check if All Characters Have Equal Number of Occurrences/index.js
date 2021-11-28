/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  let map = [];

  s = s.split("");

  s.forEach((letter) => {
    if (map[letter] === undefined) {
      map[letter] = 1;
    } else {
      map[letter] += 1;
    }
  });
  let count = false;
  const values = Object.values(map);
  let result = true;
  values.forEach((letterCount) => {
    if (!count) {
      count = letterCount;
    }
    if (count !== letterCount) {
      result = false;
      return;
    }
  });

  return result;
};
