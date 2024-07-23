/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let answer = [[], []];
  let nums1HMap = {};
  let nums2HMap = {};

  for (var i = 0; i < nums1.length; i++) {
    nums1HMap[nums1[i]] = true;
  }

  for (var i = 0; i < nums2.length; i++) {
    nums2HMap[nums2[i]] = true;
  }

  for (currentNum in nums1HMap) {
    if (!nums2HMap[currentNum]) {
      answer[0].push(parseInt(currentNum));
    }
  }
  for (currentNum in nums2HMap) {
    if (!nums1HMap[currentNum]) {
      answer[1].push(parseInt(currentNum));
    }
  }

  return answer;
};
