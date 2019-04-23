function ArrayList(){
  let arr = [];
  this.insert = function(item){
    arr.push(item);
  }
  this.toString = function(){
    return arr.join();
  }

  //start with a pointer at the beginning and end of the array
  this.quickSort = function(){
    quick(arr, 0, arr.length - 1);
  }

  let quick = function(arr, left, right){
    let index;
    if(arr.length > 1){
      index = partition(arr, left, right);

      if(left < index - 1){
        quick(arr, left, index - 1);
      }

      if(index < right){
        quick(arr, index, right);
      }
    }
  }

  let partition = function(arr, left, right){
    let pivot = array[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while(i <= j){
      while(arr[i] < pivot){
        i++;
      }
      while(arr[j] > pivot){
        j++;
      }

      if(i <= j){
        swap(arr, i, j);
        i++;
        j--;
      }
    }
    return i;
  }
}


// Merge Sort:
// O(nlogn)
// MergeSort function
// Merge function
// MergeSortRecursive function
//
// Call merge within the mergesort recursive function
