// class linkdlistes{

// }
// const linkdliste=new linkdlistes();
// linkedList.insert(7);
// linkedList.insert(true);
// linkedList.insert(20);
// linkedList.print(); // 

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}


let node1 = new ListNode(10)
let node2 = new ListNode(5)

let list =new LinkedList(node1)

console.log(list.head)