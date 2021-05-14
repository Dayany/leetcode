/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  let word1String = "";
  let word2String = "";

  for (var i = 0; i < word1.length; i++) {
    word1String += word1[i];
  }
  for (var i = 0; i < word2.length; i++) {
    word2String += word2[i];
  }

  if (word1String === word2String) return true;

  return false;
};
