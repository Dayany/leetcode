var firstPalindrome = function (words) {
  for (let j = 0; j < words.length; j++) {
    let isPalindrome = true;
    for (let i = 0; i < Math.ceil(words[j].length / 2); i++) {
      if (words[j].charAt(i) !== words[j].charAt(words[j].length - 1 - i)) {
        isPalindrome = false;
      }
    }
    if (isPalindrome) {
      return words[j];
    }
  }

  return "";
};
