/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let startPointer = 0;
  let arrayPointer = 0;
  let resultArray = [];

  let charCounter = 1;
  let currentChar = "";
  while (startPointer < chars.length) {
    if (currentChar === "") {
      console.log(currentChar);
      currentChar = chars[startPointer];
    }
    if (chars[startPointer] === chars[startPointer + 1]) {
      console.log(chars[startPointer]);
      charCounter++;
      startPointer++;
      continue;
    }

    chars[arrayPointer++] = currentChar;
    if (charCounter > 1) {
      for (let digit of charCounter.toString()) {
        chars[arrayPointer++] = digit;
      }
      chars[arrayPointer];
    } else {
    }
    charCounter = 1;
    currentChar = "";
    startPointer++;
  }
  return arrayPointer;
};
