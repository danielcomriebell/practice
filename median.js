//median of two sorted arrays


let arr1 = ['4','6','21','26'];
let arr2 = ['5', '10', '34', '45'];

// let arr1 = ['1','2'];
// let arr2 = ['3', '4'];

let median = (arr1, arr2) =>{
  let arr3 = arr1.concat(arr2);
  arr3.sort((a,b)=>a-b);
  
  let midpoint = arr3.length / 2;

  if(arr3.length % 2 === 0){ //iseven
    let result = Number(arr3[midpoint]) + Number(arr3[midpoint - 1]);
    return result / 2;
  } else{
    return arr3[midpoint];
  }
}

console.log(median(arr1,arr2));
