function Stack(){
  //properties and methods go here
  let items = [];

  this.push = function(element){
    items.push(element);
  }
  this.pop = function(){
    return items.pop();
  };
  this.peek = function(){
    return items.pop(this.items.length - 1);
  };
  this.clear = function(){
    items = [];
  };
  this.size = function(){
    return items.length;
  };
  this.isEmpty = function(){
    return items.length == 0;
  };
  this.print = function(){
    console.log(items.toString());
  }
}

function decimal_to_binary(num){
    var remStack = new Stack();


    while(num > 0){
      remStack.push(num % 2);
      num = Math.floor(num / 2);
      // console.log(num);
    }

    remStack.print();

}



console.log(decimal_to_binary(10));

// console.log(Math.floor(1/2))
