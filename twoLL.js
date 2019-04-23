//merge two sorted linkedlists and return it as a new list
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


var mergeTwoLists = function(l1, l2){
    let l3 = new ListNode();
    let current = l3;
    
    while(l1.next !== null && l2.next !== null){
        l1 = l1.next;
        l2 = l2.next;
        console.log("hello");
    }
}

const l1 = [1, 2, 4];
const l2 = [1, 3, 4];


console.log(mergeTwoLists(l1, l2));