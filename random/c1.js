var stockArray = []

var s1 = [
	{
		symbol: 'AAPL', price: 13,
  },
  {
  	symbol: 'GOOG', price: 25
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

function processEvt(stocks) {
  stocks.forEach((stock) => {
    //if exists

    var idx = stockArray.findIndex((s) => stock.symbol === s.symbol)

    if (idx > -1) {
      stockArray.splice(idx, 1)
    }

    stockArray.push(stock)
  })
}

function getSymbol(symbol) {
  return stockArray.find(s => s.symbol === symbol)
}

function getTop() {
  var sortedByPrice = stockArray.sort((a, b) => {
    return a.price < b.price
  })
  return sortedByPrice[0]
}

processEvt(s1)
processEvt(s2)

console.log('Stock: ', getSymbol('AAPL'))
console.log('Top: ', getTop())
