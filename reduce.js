let arr = [1,2,3,4,5];


var reduceFunction = arr.reduce((accum, currentValue) =>{
  return accum + currentValue;
})


console.log(reduceFunction);
