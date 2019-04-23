var trailingZeroes = function(n){

  if(n == 0 || n == 1 ){
    return 0;
  } else{
    let answer = 0;
    let count = n;
    let val = 1;
    while(count !== 0){
      val *= count;
      count--;
    }

    console.log(val);

    let char = val.toString();
    let charArr = [];

    for(let i = 0; i < char.length; i++){
      charArr.push(char.charAt(i));
    }

    console.log(charArr);

    for(let i = charArr.length - 1; i >= 0; i--){
      if(charArr[i] === '0'){
        answer++;
      } else{
        break;
      }
    }
    return answer;
  }
}

let number = 30;
console.log(trailingZeroes(number));
