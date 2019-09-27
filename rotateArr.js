var rotate = function(nums, k) {
  return [...nums.slice(-k), ...nums.slice(0, -k)];
  // let endNums = nums.slice(-k)
  // let beginNums = nums.slice(0, -k)
  // let nuNums = [...endNums, ...beginNums]
  // return nuNums
};
