const nums = [1,2,3,3];


let subsets = (str) =>{
  let obj = {};
  for(let i = 0; i < str.length; i++){
    //by assigning the key to a value, it will eliminate chances of a duplicates
    obj[str[i]] = true;
  }
  let arr = Object.keys(obj);
  let result = [[]];

  for(let i = 0; i < arr.length; i++){
    let len = result.length;
    for(var x = 0; x < len; x++){
      result.push(result[x].concat(arr[i]));
    }
  }
  return result;
}

console.log(subsets(nums));
