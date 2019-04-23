function HashTable(){
  var table = [];


  var hashCode = function(key){
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % 37;
  }


  this.put = function(key, value){
    let value = hashCode(key);
    console.log(position + ' - ' + key);
    table[position] = value;
  }

  this.remove = function(key){
    table[hashCode(key)] = undefined;
  }

  this.get = function(key){
    return table[hashCode(key)];
  }


}
