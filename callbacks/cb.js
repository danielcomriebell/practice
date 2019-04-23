const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];


function getPosts(){
  // setTimeout(()=>{
    let output = [];
    posts.forEach((post)=>{
      output.push(post);
    })
  console.log(output);
  // }, 1000)
}


createPost = function(post, callback){

  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      posts.push(post);
      const error = false;
      if(!error){
        resolve();
      } else{
        reject('Error: Something went wrong');
      }
    })
  })
}

// createPost({title: 'post three', body: 'This is post three'}).then(getPosts).catch((err)=>{
//   console.log(err);
// });
//
//
//
//
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject) =>{
//   setTimeout(resolve, 2000, 'Goodbye');
// });
//
// Promise.all([promise1, promise2, promise3]).then(values => console.log(values));


async function fetchUsers(){
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  console.log(data);
}


async function init(){
  await createPost({title: 'post three', body: 'This is post three'});
  getPosts();
}

// init();
fetchUsers();
