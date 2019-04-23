//Graph Implementation

function Graph(){
  var vertices = [];
  var adjList = new Dictionary();


  this.addVertex = function(v){
    vertices.push(v);
    adjList.set(v, []);
  }

  this.addEdge = function(v, w){
    adjList.get(v).push(w);
    adjList.get(w).push(v);
  }

  var initializeColor = function(){
    var color = [];
    for (var i = 0; i < vertices.length; i++) {
      color[vertices[i]] = 'white';
    }
    return color;
  };

  this.bfs = function(v, callback){
    var color = initializeColor();
    var queue = new Queue();
    queue.enqueue(v);


    while(!queue.isEmpty()){
      var u = queue.dequeue();
      var neighbors = adjList.get(u);
      color[u] = 'grey';

      for (var i = 0; i < neighbors.length; i++) {
        var w = neighbors[i];
        if(color[w] === 'white'){
          color[w] = 'grey';
          queue.enqueue(w);
        }
      }

      color[u] = 'black';
      if(callback){
        callback(u);
      }
    }
  }


  this.BFS2 = fucntion(v, callback){
    var color = initializeColor();
    var queue = new Queue();
    var d = [];
    var pred = [];
    queue.enqueue(v);

    for (var i = 0; i < vertices.length; i++) {
      d[vertices[i]] = 0;
      pred[vertices[i]] = null;
    }

    while(!queue.isEmpty()){
      var u = queue.dequeue();
      var neighbors = adjList.get(u);
      color[u] = 'grey';
      for (var i = 0; i < neighbors.length; i++) {
        var w = neighbors[i];
        if(color[w] === 'white'){
          color[w] = 'grey';
          d[w] = d[u] + 1;
          pred[w] = u;
          queue.enqueue(w);
        }
      }

      color[u] = 'black';
    }

    return{
      distances: d,
      predecessors: pred
    };

  }

  this.dfs = function(callback){
    var color = initializeColor();
    for (var i = 0; i < vertices.length; i++) {
      if(color[vertices[i] === 'white']){
        dfsVisit(vertices[i], color, callback);
      }
    }
  };


  var dfsVisit = function(u, color, callback){
    color[u] = 'grey';
    if(callback){
      callback(u);
    }

    var neighbors = adjList.get(u);
    for(var i = 0; i < neighbors.length; i++){
      var w = neighbors[i];
      if(color[w] === 'white'){
        dfsVisit(w, color, callback);
      }
    }

    color[u] = 'black';
  }
}
