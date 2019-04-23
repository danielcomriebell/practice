var s1 = [
	{
		symbol: 'AAPL', price: 13,
  },
  {
  	symbol: 'GOOG', price: 25
  },
  {
    symbol: 'AIG', price: 25
  }
]

var s2 = [
	{
		symbol: 'AAPL', price: 26,
  },
  {
  	symbol: 'GOOG', price: 35,
  },
  {
  	symbol: 'EBAY', price: 200
  }
]

var s = {};


// Realtime stock prices in an array. Overwrite if it already exists
// function to get current stocks details
// function to get the highest price



function setPrices(s1){
  for(let i =0 ; i < s1.length; i++){
    s[s1[i].symbol] = s1[i].price;
  }

  // console.log(s);
}

function getDetails(symbol){
  let sym = symbol;
  let price = s[symbol];
  return {symbol: sym, price: price};
}

function getHighestPrice(){
  let keys = Object.keys(s);
  let price;
  let symbol;
  for(let i = 0; i < keys.length; i++){
    if(!price){
      price = s[keys[i]];
      symbol = keys[i];
    } else{
      if(price > s[keys[i]]){
        continue;
      } else if(price < s[keys[i]]){
        price = s[keys[i]];
        symbol = keys[i];
      }
    }
  }

  return [symbol, price];
}


setPrices(s1);
setPrices(s2);

console.log(getDetails('AAPL'));
console.log(getHighestPrice());
