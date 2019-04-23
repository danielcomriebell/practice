let arr = [4,2,1];


let selectionSort = function(arr){
  let indexMin;
  for(let i = 0; i < arr.length - 1; i++){
    indexMin = i;
    for(let j = i; j < arr.length; j++){
      console.log(i, j);
      if(arr[indexMin] > arr[j]){
        indexMin = j;
      }
    }

    if(i !== indexMin){
      [i, indexMin] = [indexMin, i];
    }
  }

  console.log(arr);
}


selectionSort(arr);
