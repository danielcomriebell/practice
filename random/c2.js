var a = [10, 11, 20, 1, 56, 5]
var max = 0
var min = 0
var maxProfie = 0

for (var i = a.length; i > 0; i--) {
  if (!max) max = a[i]
  if (!min) min = a[i]

  if (max < a[i]) max = a[i]
  if (min > a[i]) min = a[i]
}

maxProfit = max - min
console.log('maxProfit: ', maxProfit)
