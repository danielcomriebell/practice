var removeDuplicates = function(arr){
  let map = new Map();

  for(let i = 0; i < arr.length; i++){
    if(!map.has(arr[i])){
      map.set(arr[i], 0);
    } else{
      map.set(arr[i], map.get(arr[i]) + 1);
      if(map.get(arr[i]) > 0){
        arr.splice(i, 1);
      }
    }

    // else if (map.get(arr[i]) == 1 || map.get(arr[i]) == 0){
    //   arr.splice(i, 1);
    //   map.set(arr[i], 0)
    // } else{
    //   map.set(arr[i], 0);
    //   arr.splice(i, 1);
    //
    // }
    console.log(map);
  }

  return arr;
}

let arr = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(arr));
