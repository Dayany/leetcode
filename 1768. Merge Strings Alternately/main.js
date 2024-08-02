/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let result = "";
  let word1Pointer = 0;
  let word2Pointer = 0;

  while (word1Pointer < word1.length || word2Pointer < word2.length) {
    if (word1Pointer < word1.length) {
      result += word1.charAt(word1Pointer);
      word1Pointer++;
    }
    if (word2Pointer < word2.length) {
      result += word2.charAt(word2Pointer);
      word2Pointer++;
    }
  }
  return result;
};
