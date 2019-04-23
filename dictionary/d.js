function Dictionary(){
  var items = {};


  this.set = function(key, value){
    items[key] = value;
  };
  this.delete = function(key){
    if(items.has(key)){
      delete items[key];
      return true;
    } else{
      return false;
    }
  };
  this.size = function(){
    return Object.keys(items).length;
  };
  this.get = function(key){
    if(this.has(key)){
      return items[key];
    } else{
      return undefined;
    }
  };
  this.has = function(key){
    return key in items;
  };
  this.clear = function(){
    items = {};
  };
  this.values = function(){
    let arr = [];

    for(x in items){
      if(this.has(x)){
        arr.push(items[x]);
      }
    }
    return arr;
  };
  this.keys = function(){
    return Object.keys(items);
  };

  this.getItems = function(){
    return items;
  }


}
