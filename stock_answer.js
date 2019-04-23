var maxProfit = function(prices){
  let max = 0;
  // let profit;

  for(let i = 0; i < prices.length - 1; i++){
    for(let j = 1; j < prices.length; j++){
      let profit = prices[j] - prices[i];
      if(profit > max){
        max = profit;
      }
    }
  }

  return max;
}



var prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));
