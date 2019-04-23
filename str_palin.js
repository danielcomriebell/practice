var isPalindrome = function(s) {
  let arr = [];
  let reverse_arr = [];
  let flag = true;

  let regex = /([a-zA-Z0-9])/;

  if(s === " " || s === ""){
    // flag = false;
    // return true;
    return true;

  } else{
    s = s.toLowerCase();
    for(let i = 0; i < s.length; i++){
      if(regex.test(s.charAt(i))){
        arr.push(s.charAt(i));
      }
    }

    for(let i = arr.length - 1; i >=0; i--){
      reverse_arr.push(arr[i]);
    }

    for(let i = 0; i < arr.length; i++){
      console.log(arr[i], reverse_arr[i]);
    }

    if(reverse_arr.length !== arr.length){
      flag = false;
    } else{
      for(let i = 0; i < arr.length; i++){
        if(arr[i] !== reverse_arr[i]){
          flag = false;
        }
      }
    }
    return flag;
  }
};


var str = "";


console.log(isPalindrome(str));
let regex = /([a-zA-Z0-9])/;

// console.log(regex.test(':'));
