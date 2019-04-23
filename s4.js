let maxProfit = function(prices){

  let maxProfit = 0;
  let minPrice = Number.MAX_SAFE_INTEGER;

  prices.forEach((price) =>{
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  })

  return maxProfit;
}


let prices = [10, 11, 20, 1, 56, 5];
console.log(maxProfit(prices));
