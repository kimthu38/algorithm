class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(head, tail) {
        this.head = head;
        this.tail = tail;
    }
    append(value){
        var node = new Node(value);
        if(this.head == null){
            this.head = node;
            this.tail = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }
    prepend(value){
        const newHead = new Node(value);
        newHead.next = this.head;
        this.head = newHead;
        if(!this.tail){
            this.tail = newNode;
        }
    }
    delete(value){
        if(this.head == null){
            return;
        }
        if(this.head.data == value){
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while(current.next != null){
            if(current.next.data == value){
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    search(value){
        if(this.head == null){
            return null;
        }
        if(this.head == value){
            return this.head;
        }
        let current = this.head;
        while(current.next != null){
            if(current.next.data == value){
                return current.next;
            }
            current = current.next;
        }
        return null;
    }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.prepend(5);
console.log(linkedList);
/**
 * LinkedList { head: Node { data: 5, next: Node { data: 1, next: [Node] } } }
 */

linkedList.delete(1);
console.log(linkedList);
/**
 * LinkedList { head: Node { data: 5, next: Node { data: 2, next: [Node] } } }
 */

console.log(linkedList.search(2).next);
/**
 * Node { data: 3, next: Node { data: 4, next: null}}
 */

console.log(linkedList.search(3));
/**
 * Node { data: 3, next: Node { data: 4, next: null}}
 */