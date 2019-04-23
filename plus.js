var plusOne = function(digits){
  let str = '';
  let resultArr = [];
  for (var i = 0; i < digits.length; i++) {
    str += digits[i];
  }

  // str = +str;
  return str;
}


console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
