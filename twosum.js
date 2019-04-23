var twoSum = function(nums, target){
  for(var i = 0; i < nums.length; i++){
    if(nums.indexOf(target - nums[i]) !== -1 && nums.indexOf(target - nums[i]) !== i){
      return [i, nums.indexOf(target - nums[i])]
    }
  }
}



let nums = [0,4,3,0];
let target = 0;

// console.log(nums.indexOf(5));


console.log(twoSum(nums, target));
// nums.findIndexOf()
