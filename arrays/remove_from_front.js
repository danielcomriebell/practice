//Remove an element from the front of an array


arr = [1,2,3,4,5];


function removeFromFront(arr){
  for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i + 1];
  }

  return arr;
}


console.log(removeFromFront(arr));
