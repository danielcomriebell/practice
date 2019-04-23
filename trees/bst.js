//Binary Search Tree


function bst(){
  var Node = function(key){
    this.key = key;
    this.left = null;
    this.right = null;
  };

  var root = null;

  var insertNode = function(node, newNode){
    if(newNode.key < node.key){
      if(node.left === null){
        node.left = newNode;
      } else{
        insertNode(node.left, newNode);
      }
    } else{
      if(node.right === null){
        node.right = newNode;
      } else{
        insertNode(node.right, newNode);
      }
    }
  }

  this.insert = function(key){
    var newNode = new Node(key);

    if(root === null){
      root = newNode;
    } else{
      insertNode(root, newNode);
    }
  }

  this.preOrderTraverse = function(callback){
    preOrderTraversal(root, callback);
  }

  this.inOrderTraverse = function(callback){
    inOrderTraversal(root, callback);
  }

  this.postOrderTraverse = function(callback){
    postOrderTraversal(root, callback);
  }

  this.min = function(){
    return minNode(root);
  }

  this.max = function(){
    return maxNode(root);
  }

  this.search = function(key){
    return searchNode(root, key);
  }

  this.remove = function(key){
    root = removeNode(root, key);
  }


  var removeNode = function(node, key){
    if(node === null){
      return null;
    }

    if(key < node.key){
      node.left = removeNode(node.left, key);
      return node;
    } else if( key > node.key){
      node.right = removeNode(node.right, key);
      return node;
    } else{
      if(node.left === null && node.right === null){
        node = null;
        return node;
      }

      if(node.left === null){
        node = node.right;
        return node;
      } else if(node.right === null){
        node = node.left;
        return node;
      }

      var aux = findMinNode(node.right);
      node.key = aux.key;
      node.right = removeNode(node.right, aux.key);
      return node;
    }
  }


  var searchNode = function(node, key){
    if(node === null){
      return false;
    }
    else{
      if(node.key > key){
        searchNode(node.left, key);
      }

      else if(key > node.key){
        searchNode(node.right, key);
      }

      else{
        return true;
      }
    }
  }


  var maxNode = function(node){
    if(node){
      while(node && node.right !== null){
        node = node.right;
      }

      return node.key;
    }

    return null;
  }


  var minNode = function(node){
    if(node){
      while(node && node.left !== null){
        node = node.left;
      }

      return node.key;
    }

    return null;
  }



  let inOrderTraversal = function(node, callback){
    if(node !== null){
      inOrderTraversal(node.left, callback);
      callback(node.key);
      inOrderTraversal(node.right, callback);
    }
  }

  let postOrderTraversal = function(node, callback){
    if(node !== null){
      postOrderTraversal(node.left, callback);
      postOrderTraversal(node.right, callback);
      callback(node.key);
    }
  }

  let preOrderTraversal = function(node, callback){
    if(node !== null){
      callback(node.key);
      preOrderTraversal(node.left, callback);
      preOrderTraversal(node.right, callback);
    }
  }
}


let tree = new bst();

tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);

function printNode(value){
  console.log(value);
}


tree.preOrderTraverse(printNode);
