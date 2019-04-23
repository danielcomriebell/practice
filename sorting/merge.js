function ArrayList(){
  let arr = [];
  this.insert = function(item){
    arr.push(item);
  }
  this.toString = function(){
    return arr.join();
  }

  this.mergeSort = function(){
    arr = mergeSortRec(arr);
  }

  let mergeSortRec = function(arr){
    let length = arr.length;
    //With every recursive algo, you need a base case
    if(length === 1){
      return length;
    }

    let mid = Math.floor(length/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid + 1, length);

    return merge(mergeSortRec(left), mergeSortRec(right));
  }

  let merge = function(left, right){
    let result = [];
    let il = 0;
    let ir = 0;

    while(il < left.length && ir < right.length){
      if(left[il] < right[ir]){
        result.push(left[il++]);
      } else{
        result.push(right[ir++]);
      }
    }

    while(il < left.length){
      result.push(left[il++]);
    }

    while(ir < right.length){
      result.push(right[ir++])
    }

    return result;
  }
}


// Merge Sort:
// O(nlogn)
// MergeSort function
// Merge function
// MergeSortRecursive function
//
// Call merge within the mergesort recursive function
