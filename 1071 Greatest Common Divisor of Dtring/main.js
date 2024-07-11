/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  let longestString = str1.length <= str2.length ? str2 : str1;
  let shortestString = str2.length >= str1.length ? str1 : str2;

  let pointer = 0;
  let gcdOfStrings = shortestString;

  while (pointer <= longestString.length) {
    if (gcdOfStrings.length === 0) return "";
    if (
      shortestString.length % gcdOfStrings.length !== 0 ||
      longestString.length % gcdOfStrings.length !== 0
    ) {
      gcdOfStrings = gcdOfStrings.substring(0, gcdOfStrings.length - 1);
      pointer = gcdOfStrings.length;
      continue;
    }

    if (pointer > longestString.length) return "";

    let longestSubString = longestString.substring(
      pointer,
      pointer + gcdOfStrings.length,
    );

    let shortestSubString =
      pointer >= shortestString.length
        ? gcdOfStrings
        : shortestString.substring(pointer, pointer + gcdOfStrings.length);

    if (
      shortestSubString === gcdOfStrings &&
      gcdOfStrings === longestSubString
    ) {
      pointer = gcdOfStrings.length + pointer;
    } else {
      pointer = 0;
      gcdOfStrings = gcdOfStrings.substring(0, gcdOfStrings.length - 1);
    }
    if (pointer === longestString.length) return gcdOfStrings;
  }
};
