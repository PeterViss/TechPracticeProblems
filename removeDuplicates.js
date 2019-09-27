var removeDuplicates = function(nums) {
  const nuNums = [];
  nums.forEach(number => {
    if (nuNums.includes(number) !== true) {
      nuNums.push(number);
    }
  });
  return nuNums.length;
};
