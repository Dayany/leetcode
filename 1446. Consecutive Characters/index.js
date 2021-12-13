/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let longestStreak = 1;
  let currentStreakLetter = s.charAt(0);
  let currentStreakTimes = 1;

  for (let i = 1; i <= s.length; i++) {
    if (s.charAt(i) === currentStreakLetter) {
      currentStreakTimes++;
    } else {
      if (currentStreakTimes >= longestStreak) {
        longestStreak = currentStreakTimes;
      }
      currentStreakLetter = s.charAt(i);
      currentStreakTimes = 1;
    }
  }
  return longestStreak === 0 ? currentStreakTimes : longestStreak;
};
