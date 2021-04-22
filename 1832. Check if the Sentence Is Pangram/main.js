/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let index = 0; index < alphabet.length; index++) {
    if (!sentence.includes(alphabet[index])) return false;
  }
  return true;
};
