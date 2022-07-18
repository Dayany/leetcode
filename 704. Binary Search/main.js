var search = function (nums, target) {
  let floor = 0;
  let ceiling = nums.length - 1;

  while (floor <= ceiling) {
    let pointer = Math.floor((ceiling + floor) / 2);

    const currentValue = nums[pointer];
    if (currentValue === target) {
      return pointer;
    }

    if (currentValue > target) {
      ceiling = pointer - 1;
    } else {
      floor = pointer + 1;
    }
  }
  return -1;
};
