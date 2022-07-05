var isAnagram = function (s, t) {
  let hash = {};
  [...s].map((char) => (hash[char] = hash[char] ? hash[char] + 1 : 1));

  for (var char of t) {
    if (!hash[char] || hash[char] === 0) {
      return false;
    } else {
      hash[char] = hash[char] - 1;
    }
  }

  for (var char in hash) {
    if (hash[char] > 0) return false;
  }

  return true;
};
