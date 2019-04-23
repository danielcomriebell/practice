//Insert an element in the front of an array

arr = [1,2,3,4,5];

function insertFront(arr, num){
  for (let i = arr.length; i >= 0; i--){
    arr[i] = arr[i-1];
  }

  arr[0] = num;

  return arr;
}



console.log(insertFront(arr, -1));


arr1 = [1,2,3,4];
arr1.unshift(-1);

console.log(arr1);
