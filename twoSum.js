var twoSum = (nums, target) => {
  let hash = {};
  for (let i = 0; i <= nums.length; i++) {
    let diff = target - nums[i];
    if (hash[diff] !== undefined) {
      return [hash[diff], i];
    }
    hash[nums[i]] = i;
  }
};

// var twoSum = function(nums, target) {
//    const hash = {};
//    for(let i = 0; i <= nums.length; i++){
//     let diff = target - nums[i]
//     if(hash[diff] !== undefined){
//         return [i, hash[diff]].sort();
//     }
//        hash[nums[i]] = i
// }

// };
