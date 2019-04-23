function ArrayList(){
  let arr = [];
  this.insert = function(item){
    arr.push(item);
  }
  this.toString = function(){
    return arr.join();
  }

  this.binarySearch = function(item){
    this.quickSort();

    let low = 0;
    let high = arr.length - 1;
    let mid;
    let element;

    while(low <= high){
      mid = Math.floor((low + high) / 2);
      element = arr[mid];

      if(element < item){
        low = mid + 1;
      } else if (element > item){
        high = mid - 1;
      } else {
        return mid;
      }
    }
    return 01;
  };
}
