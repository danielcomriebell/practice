var isPalindrome = function(x){
  let num;
  if(x < 0){
    return false;
  } else{
    num = x.toString();
    num = num.split("").reverse().join("");
    num = Number(num);
    if(num === x){
      return true;
    }
    else{
      return false;
    }
  }
}



console.log(isPalindrome(101));
