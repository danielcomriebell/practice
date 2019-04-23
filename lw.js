var lengthOfLastWord = function(s){
  let arr = s.split(" ");
  let count = 0;
  let index = arr.length - 1;
  let regex = /([a-zA-Z])/;

  if(!regex.test(s)){
    return 0;
  }

  else{
    for(var i = arr.length - 1; i >= 0; i--){
      if(arr[i] !== ''){
        return arr[i].length;
        break;
      }
    }
  }
}


// function isAlphanumeric( str ) {
//  return /^[0-9a-zA-Z]+$/.test(str);
// }

console.log(lengthOfLastWord("hello world"));
