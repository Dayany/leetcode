/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  var nums1Pointer = m - 1;
  var nums2Pointer = n - 1;

  for (var i = nums1.length - 1; i >= 0; i--) {
    if (nums2Pointer < 0) {
      nums1[i] = nums1[nums1Pointer];
      nums1Pointer--;
      continue;
    }
    if (nums1Pointer < 0) {
      nums1[i] = nums2[nums2Pointer];
      nums2Pointer--;
      continue;
    }

    if (nums1[nums1Pointer] < nums2[nums2Pointer]) {
      console.log(nums2[nums2Pointer]);
      nums1[i] = nums2[nums2Pointer];
      nums2Pointer--;
    } else {
      nums1[i] = nums1[nums1Pointer];
      nums1Pointer--;
    }
  }
};
