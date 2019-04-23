var majorityElement = function(nums){
  let s = {};

  for(let i = 0; i < nums.length; i++){
    if(s[nums[i]]){
      s[nums[i]] = s[nums[i]] + 1;
    } else{
      s[nums[i]] = 1;
    }
  }

  let keys = Object.keys(s);
  let max = 0;
  let answer;

  for(let i = 0; i < keys.length; i++){
    if(s[keys[i]] > max){
      max = s[keys[i]];
      answer = keys[i];
    }
  }

  return answer;
}



let nums = [3,2,3];

console.log(majorityElement(nums));
