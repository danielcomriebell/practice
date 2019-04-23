let setA = new Set();

setA.add(1);
setA.add(2);
setA.add(3);

let setB = new Set();

setB.add(3);
setB.add(4);



let intersection = function(setA, setB){
  let intersectionSet = new Set();

  for(let x of setA){
    if(setB.has(x)){
      intersectionSet.add(x);
    }
  }

  return intersectionSet;
}

let union = function(setA, setB){
  let unionSet = new Set();
  for(let x of setA){
    unionSet.add(x);
  }

  for(let x of setB){
    unionSet.add(x);
  }

  return unionSet;
}

let difference = function(setA, setB){
  let differenceSet = new Set();

  for(let x of setA){
    if(!setB.has(x)){
      differenceSet.add(x);
    }
  }

  return differenceSet;
}




console.log(set);
