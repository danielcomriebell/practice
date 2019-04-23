let maxProfit = function(prices){
  let minPrice = Number.MAX_SAFE_INTEGER;
  let maxProfit = 0;

  prices.forEach((price) =>{
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  })

  return maxProfit;
}


let prices = [1,2,4];
console.log(maxProfit(prices));
