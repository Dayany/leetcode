/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let result = "";
  let biggestLength = word1.length > word2.length ? word1.length : word2.length;

  for (let i = 0; i < biggestLength; i++) {
    if (i < word1.length) {
      result += word1.charAt(i);
    }
    if (i < word2.length) {
      result += word2.charAt(i);
    }
  }

  return result;
};
