//array of stock prices, determine highest maxProfit


let arr = [10, 11, 20, 1, 56, 5];



function maxProfit(arr){
  let answer = 0;
  let arr2 = arr.sort(function(a, b){
    return a - b;
  });

  answer = arr[arr.length - 1] - arr[0];
  return answer;
}



function maxProfit2(arr){
  let maxProfit = 0;
  let max;
  let min;

  for (var i = arr.length - 1; i > 0; i--) {
    if(!max){a[i] = max};
    if(!min){a[i] = min};
  }
}



console.log(maxProfit(arr));
