var removeDuplicates = function(nums){
  for(let i = 0; i < nums.length; i++){
    if(nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])){
      nums.splice(i, 1);
    }
  }

  return nums;
}



let nums = [1,1,2];


console.log(removeDuplicates(nums));
