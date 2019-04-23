function Stack(){
  //properties and methods go here
  let items = [];

  this.push = function(element){
    this.items.push(element);
  }
  this.pop = function(){
    return items.pop();
  };
  this.peek = function(){
    return this.items.pop(this.items.length - 1);
  };
  this.clear = function(){
    this.items = [];
  };
  this.size = function(){
    return this.items.length;
  };
  this.isEmpty = function(){
    return this.items.length == 0;
  };
}


//ES6
class Stack{
  //We cannot declare variables in the body of the class as other languages
  //We need to delcare variables inside the constructor
  //We can make the reference to the variable using this.nameofVariable in other functions of the class
  constructor(){
    this.items = [];
  }

  push(element){
    this.items.push(element);
  }

}
