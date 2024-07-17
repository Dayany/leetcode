/*
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelsCount = 0;
  let result = 0;

  for (var i = 0; i < k; i++) {
    if (vowels.includes(s.charAt(i))) {
      vowelsCount++;
    }
    result = result > vowelsCount ? result : vowelsCount;
  }

  for (var i = 1; i + k < s.length + 1; i++) {
    if (vowels.includes(s.charAt(i - 1))) {
      vowelsCount--;
    }

    if (vowels.includes(s.charAt(i + k - 1))) {
      vowelsCount++;
    }
    result = result > vowelsCount ? result : vowelsCount;
  }
  return result;
};
