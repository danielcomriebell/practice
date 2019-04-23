// let promise = new Promise((fulfill, reject) =>{
//   setTimeout(()=>{
//     fulfill('Hello World')
//   }, 250);
//
//
// })
//
//
//
// promise.then((success, reject) => {
//   console.log(success);
// })




let maxProfit = function(prices){
  let maxProfit = 0;
  let min = Number.MAX_SAFE_INTEGER;

  prices.forEach((price) =>{
    min = Math.min(min, price);
    maxProfit = Math.max(maxProfit, price - min);
  })

  return maxProfit;
}


let prices = [2,4,1];
console.log(maxProfit(prices));
