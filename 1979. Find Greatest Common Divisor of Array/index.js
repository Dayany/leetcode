/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  let biggestNumber = nums[0];
  let smallestNumber = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (biggestNumber < nums[i]) {
      biggestNumber = nums[i];
    }
    if (smallestNumber > nums[i]) {
      smallestNumber = nums[i];
    }
  }
  return gcd(biggestNumber, smallestNumber);
};

const gcd = function (a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
};
