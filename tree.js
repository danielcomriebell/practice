class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class Tree{
    constructor(node){
        if(node === undefined){
            this.root = null;
        } else{
            this.root = node;
        }
    }

    addNode(node){
        if(this.root === null){
            this.root = node;
        } else{
            this.addNewNode(this.root, node);
        }
    }

    addNewNode(node, newNode){
        if(newNode.val < node.val){
            if(node.left === null){
                node.left = newNode;
            }
            else{
                this.addNewNode(node.left, newNode);
            }
        } else{
            if(node.right === null){
                node.right = newNode;
            }
            else{
                this.addNewNode(node.right, newNode);
            }
        }
    }
}


let n = new Node(10);
let t = new Tree(n);
let v = new Node(15);
t.addNode(v);
console.log(t);