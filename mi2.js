function Interval(start, end){
  this.start = start;
  this.end = end;
}

let interval_arr = [];
// interval_arr.push(new Interval(1, 3));
// interval_arr.push(new Interval(2, 6));
// interval_arr.push(new Interval(8, 10));
// interval_arr.push(new Interval(15, 18));
interval_arr.push(new Interval(4, 5));
interval_arr.push(new Interval(1, 4));

let merge = (arr) =>{
  arr.sort((a,b) => a.start - b.start);

  let prev = arr[0];
  let arr_stack = [arr[0]];
  // console.log(arr);
  for(let curr of arr){
    // console.log()
    if(prev.end >= curr.start){
      prev.end = Math.max(prev.end, curr.end);
    } else{
      arr_stack.push(curr);
      prev = curr;
    }

    console.log(curr, prev);
  }

  // return arr_stack;
}


console.log(merge(interval_arr));
