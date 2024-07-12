/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let result = "";
  let pointer = s.length;
  let firstSpaceAdded = true;
  let currentWord = "";
  while (pointer >= 0) {
    if (!firstSpaceAdded && s.charAt(pointer) === " ") {
      if (result === "") {
        result = currentWord;
      } else {
        result += " " + currentWord;
      }
      currentWord = "";
      firstSpaceAdded = true;
    } else if (s.charAt(pointer) !== " ") {
      currentWord = s.charAt(pointer) + currentWord;
      firstSpaceAdded = false;
    }

    pointer--;
  }

  if (currentWord !== "") {
    if (result === "") {
      result = currentWord;
    } else {
      result = result + " " + currentWord;
    }
  }

  return result;
};
