var searchInsert = function(nums, target) {
  var answer;
  if(nums.indexOf(target) !== -1){
    return nums.indexOf(target);
  } else{
    let greaterThan = nums.filter(ele => ele > target);
    if(greaterThan.length < 1){
      answer = nums.length;
    } else{
      answer = nums.indexOf(greaterThan[0]);
    }
    return answer;
  }
};


let num = [1,3,5,6];
let target = 0;


console.log(searchInsert(num, target));
