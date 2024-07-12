/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let beginPointer = 0;
  let endPointer = s.length;
  let sInArray = s.split("");

  while (beginPointer <= endPointer) {
    console.log(beginPointer, "1");
    console.log(endPointer, "2");
    if (!vowels.includes(sInArray[beginPointer])) {
      console.log(beginPointer);
      beginPointer++;
      continue;
    }

    if (!vowels.includes(sInArray[endPointer])) {
      endPointer--;
      continue;
    }
    let tempVowel = sInArray[endPointer];
    sInArray[endPointer] = sInArray[beginPointer];
    sInArray[beginPointer] = tempVowel;
    beginPointer++;
    endPointer--;
  }
  return sInArray.join("");
};
