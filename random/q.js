function countChange(money, coins){
  let arr = [];
  for(let i = 0; i < money + 1; i++){
    arr.push(0);
  }

  arr[0] = 1;
  
  coins.forEach((coin)=>{
    for(let i = 1; i < arr.length; i++){
      if( i >= coin){
        arr[i] += arr[i - coin];
      }
    }
  })
  return arr[money];

}


console.log(countChange(10, [5,2,3]));
