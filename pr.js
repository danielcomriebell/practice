const myPromise = new Promise((fulfill, reject) =>{
  setTimeout(function(){
    reject('hello');
  }, 250);

  // reject('something');
})


myPromise.then((successMessage)=>{
  console.log(successMessage + ' success');
}).catch((errorMessage)=>{
  console.log(errorMessage);
})
