/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sStringPointer = 0;
  let tStringPointer = 0;
  if (s.length === 0) return true;

  while (sStringPointer <= s.length && tStringPointer < t.length) {
    if (s.charAt(sStringPointer) === t.charAt(tStringPointer)) {
      if (sStringPointer === s.length - 1) return true;
      sStringPointer++;
      tStringPointer++;
    } else {
      tStringPointer++;
    }
  }
  return false;
};
