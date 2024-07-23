/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  let frequency1 = {};
  let frequency2 = {};
  for (var i = 0; i < word1.length; i++) {
    frequency1[word1.charAt(i)] = frequency1[word1.charAt(i)]
      ? frequency1[word1.charAt(i)] + 1
      : 1;
  }
  for (var i = 0; i < word2.length; i++) {
    frequency2[word2.charAt(i)] = frequency2[word2.charAt(i)]
      ? frequency2[word2.charAt(i)] + 1
      : 1;
  }

  for (letter in frequency1) {
    if (!word2.includes(letter)) {
      return false;
    }
  }
  for (letter in frequency2) {
    if (!word1.includes(letter)) {
      return false;
    }
  }

  const entries1 = Object.entries(frequency1);
  entries1.sort((a, b) => a[1] - b[1]);
  const entries2 = Object.entries(frequency2);
  entries2.sort((a, b) => a[1] - b[1]);
  for (let i = 0; i < entries1.length; i++) {
    if (entries1[i][1] !== entries2[i][1]) {
      return false;
    }
  }
  return true;
};
