//Creating a LinkedList

class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }



    add(element){
        //creates a new node
        let node = new Node(element);
        //to store the current node
        let current;

        if(this.head === null){
            this.head = node;
        } else{
            current = this.head;

            //iterate to the end of the list
            while(current.next){
                current = current.next;
            }

            //once you're at the end of the list assign node to the end
            current.next = node;
        }
        //increment the size property
        this.size++;
    }

    insertAt(element, index){
        //create a new node for the element passed in
        let node = new Node(element);

        //variable to store the current node
        let current;

        if(this.head === null){
            this.head = node;
        } else{
            let count = 0;
            while(count !== index && current.next){
                current = current.next;
            }
        }
    }

}


let ll = new LinkedList();

ll.add(1);

console.log(ll);