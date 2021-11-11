/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {

	let startValue = 1;
	let found = false;

	while(!found) {
		let sum = startValue;
		for(var i = 0; i < nums.length; i++){
			sum += nums[i];
			if(sum < 1){
				startValue++;
				break;
			}
			if(i === nums.length - 1){
				found = true;
			}
		}
	}

	return startValue;

};


