// Letter Combinations of a Phone Number

let obj = {
  1: [],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
}

let letterCombinations = (digits) => {
  if(digits !== ""){
    let numArr = digits.split('');
    if(numArr.length === 1){
      return obj[numArr[0]];
    } else{
      for(let i = 0; i < numArr.length; i++){
        numArr[i] = obj[numArr[i]];
      }
      //Read this reduce
      //Building subarrays
      let result = numArr.reduce((a, b) => a.reduce((r,v) => r.concat(b.map(w => [].concat(v,w))), []))
      return result.map(a=>a.join(''));
    }
  } else{
    return [];
  }
}


const str = "2345";
console.log(letterCombinations(str))
