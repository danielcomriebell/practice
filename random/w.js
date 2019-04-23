function firstNonRepeatingLetter (str) {
  if(str === ''){
    return '';
  }
  else {
    let answer;
    let str2 = str.toLowerCase();
    for(var i = 0; i < str.length; i++){
      if(str2.indexOf(str2.charAt(i)) == str2.lastIndexOf(str2.charAt(i))){
        answer = str.charAt(i);
        break;
      }
      else{
        answer = '';
      }
    }

    return answer;
  }
}


console.log(firstNonRepeatingLetter('sTreSS'));
