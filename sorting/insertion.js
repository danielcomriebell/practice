let arr = [4,2,1];


let insertionSort = function(arr){
  let j;
  let temp;

  for(let i = 1; i < arr.length; i++){
    j = i;
    temp = arr[i];
    while(j > 0 && arr[j-1] > temp){
      arr[j] = arr[j-1];
      j--;
    }

    arr[j] = temp;
  }

  console.log(arr);
}


insertionSort(arr);
