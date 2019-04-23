function Set(){
  let items = {};

  this.add = function(value){
    if(!this.has(value)){
      items[value] = value;
      return true;
    }

    return false;
  };

  this.delete = function(value){
    if(this.has(value)){
      delete items[value];
      return true;
    }

    return false;
  };


  this.has = function(value){
    return items.hasOwnProperty(value);
  };

  this.clear = function(){
    items = {};
  };

  this.values = function(){
    let values = [];
    for(let i = 0, keys = Object.keys(items); i < keys.length; i++){
      values.push(items[keys[i]]);
    }

    return values;
  };

  this.size = function(){
    return Object.keys(items).length;
  }

  this.union = function(otherSet){
    let unionSet = new Set();
    let values = this.values();

    for(let i = 0; i < values.length; i++){
      unionSet.add(values[i]);
    }
    values = otherSet.values();

    for(let i = 0; i < values.length; i++){
      unionSet.add(values[i]);
    }

    return unionSet;
  }

  this.intersection = function(otherSet){
    let intersectionSet = new Set();

    let values = this.values();
    for(let i = 0; i < values.length; i++){
      if(otherSet.has(values[i])){
        intersectionSet.add(values[i]);
      }
    }

    return intersectionSet;
  }


  this.difference = function(otherSet){
    let differenceSet = new Set();
    let values = this.values();

    for(let i = 0; i < values.length; i++){
      if(!otherSet.has(values[i])){
        differenceSet.add(values[i]);
      }
    }
    return differenceSet;
  }

  this.subset = function(otherSet){
    if(this.size() < otherSet.size()){
      return false;
    } else {
      let values = this.values();
      for(let i = 0; i < values.length; i++){
        if(!otherSet.has(values[i])){
          return false;
        }
      }
      return true;
    }
  }
}



let set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(4);


console.log(set.values());
