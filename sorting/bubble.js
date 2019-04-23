let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];


let bubbleSort = function(arr){
  // BUBBLE SORT SLOW
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length - 1; j++){
      if(arr[j] > arr[j + 1]){
        //ES6 Swap
        //No Temp
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
      console.log(arr[j], arr[j+1]);
    }
  }
}


let bubbleSort_fast = function(arr){
  // BUBBLE SORT FASTER
  // Subtract the number of passes from the inner loop, we will avoid all unnecessary comparions made by the inner loop
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length - 1 - i; j++){
      if(arr[j] > arr[j + 1]){
        //ES6 Swap
        //No Temp
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
      console.log(arr[j], arr[j+1]);
    }
  }
}

console.log(arr);
