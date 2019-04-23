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



let mergeIntervals = (intervals) =>{
  intervals.sort((a,b)=>a.start - b.start);
  for(let i = 0; i < intervals.length; i++){
    for(let j = i+1; j < intervals.length; j++){
      if(intervals[i].end >= intervals[j].start){
        intervals.splice(intervals[i], 2, new Interval(intervals[i].start, intervals[j].end));
      }
    }
  }
  mergeIntervals(intervals);
  return intervals;
}


console.log(mergeIntervals(interval_arr));
