/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {

	let map = new Map();
	let counter = 0;

	for (let i = 0; i < nums.length; i++){
		map.set(nums[i], (map.get(nums[i]) + 1 || 1))

	}

	for (let i = 0; i < nums.length; i++){
		if(map.has((nums[i] - k))){

			counter += map.get((nums[i] - k))
		}
	}

	return counter;
};

