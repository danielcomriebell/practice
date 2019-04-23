function queue(){
  let items = [];

  this.enqueue = function(element){
    items.push(element);
  }
  this.dequeue = function(){
    return items[0];
    items.splice(0, 1);
  }
  this.front = function(){
    return items[0];
  }
  this.isEmpty() = function(){
    return items.length == 0;
  }
  this.size = function(){
    return items.length;
  }
  this.print = function(){
    console.log(items.toString());
  }
}


let Queue2 = (function(){
  const items = new WeakMap();

  class Queue2{
    constructor(){
      items.set(this, []);
    }

    enqueue(elements){
      let q = items.get(this);
    }

    dequeue(){
      let q = items.get(this);
      let r = q.shift();
      return r;
    }
  }

  return Queue2;
})
