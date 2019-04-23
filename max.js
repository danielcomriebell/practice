var maxProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = Number.MAX_SAFE_INTEGER;

    prices.forEach(function(val) {
        minPrice = Math.min(minPrice, val);
        maxProfit = Math.max(maxProfit, val-minPrice);
    });

    return maxProfit;
};


let prices = [10, 11, 20, 1, 56, 5];
console.log(maxProfit(prices));


// console.log(Number.MAX_SAFE_INTEGER);
