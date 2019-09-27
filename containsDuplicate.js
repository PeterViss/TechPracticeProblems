var containsDuplicate = function(nums) {
  const nuNums = [];
  for (let i = 0; i <= nums.length; i++) {
    if (nuNums.includes(nums[i])) {
      return false;
    } else {
      nuNums.push(nums[i]);
    }
  }
  return true;
};
