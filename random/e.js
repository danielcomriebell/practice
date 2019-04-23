let set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(4);


// console.log(set);


let map = new Map();

map.set(1, 'foo');
map.set(2, 'foo');

// console.log(map);



function Dictionary(){
  let items = {};


  function hashFunction(key){
    let num = 0;

    for(var i = 0; i < key.length; i++){
      num += key.charCodeAt(i);
    }
    return num % 30;
  }

  this.set = function(key, value){
    let position = hashFunction(key);
    items[position] = value;
  }

  this.get = function(key){
    let position = hashFunction(key);
    items[position] = value;
  }

  this.values = function(){
    let arr = [];

    Object.keys(items).forEach((ele) =>{
      arr.push(items[ele]);
    })

    return arr;
  }

  this.delete = function(){

  }


}

let dan = new Dictionary();

dan.set('finkle',2);
dan.set('something',3);
dan.set('who',4);



// console.log(dan.values());


// let arr = [1,2,3,4];
//
// let result = arr.filter(ele => ele > 1);
// let reduceResult = arr.map(ele => ele + 1);
//
// console.log(result);
// console.log(reduceResult);

// dan.values().forEach(ele =>{
//   console.log(ele);
// })







let arr = [2,3,4,1,5,1];


function findFirstDuplicate(arr){
  let set = new Set();

  for(let i = 0; i < arr.length; i++){
    if(set.has(arr[i])){
      return i;
      break;
    }
    else{
      set.add(arr[i]);
    }
  }
}



console.log(findFirstDuplicate(arr));
