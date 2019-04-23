let myFirstPromise = new Promise((resolve, reject)=>{
  setTimeout(function(){
    resolve('Success!');
  }, 250);

  reject('failure');
})


myFirstPromise.then((successMessage)=>{
  console.log('Yay', successMessage)
}).catch((reason)=>{
  console.log('Handed rejection promise: ', reason)
})
