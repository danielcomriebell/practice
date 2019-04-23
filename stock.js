var maxProfit = function(prices) {
  let answer;
  var s = {};

  if(prices.length < 1){
    return 0;
  } else {
    for(let i = prices.length - 1; i >= 0; i--){
      s[prices[i]] = prices.indexOf(prices[i]);
    }
    let arr = Object.keys(s);
    for(let i = arr.length -1; i>=0; i--){
      let count = 0;
      if(s[arr[i]] < s[arr[count]]){
        count++;
      } else if (s[arr[i]] > s[arr[count]]){
        answer = arr[i] - arr[count];
        break;
      } else{
        answer = 0;
      }
    }
    return answer;
  }
};



let prices = [10, 11, 20, 1, 56, 5];


console.log(maxProfit(prices));
