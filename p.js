// var maxProfit = function(prices){
//   let maxProfit = 0;
//
//   for(var i = 0; i < prices.length - 1; i++){
//     for(var j = i + 1; j < prices.length; j++){
//       let profit = prices[j] - prices[i];
//       if(profit > maxProfit){
//         maxProfit = profit;
//       }
//     }
//   }
//
//   return maxProfit;
// }
//
//
//
// var maxProfit2 = function(prices){
//   let maxProfit = 0;
//   let minPrice = Number.MAX_SAFE_INTEGER;
//
//   prices.forEach((ele) =>{
//     minPrice = Math.min(minPrice, ele);
//     maxProfit = Math.max(maxProfit, ele - minPrice);
//   });
//
//   return maxProfit;
// }
//
//
// let prices = [2,4,1];
// console.log(maxProfit2(prices));





let arr = [1,2,3,4,5];

arr = arr.map((ele)=> ele * 2)

console.log(arr);
