class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    printList() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(' -> '));
    }

    combineImparPar() {
        if (!this.head || !this.head.next) {
            return;
        }

        let odd = this.head;       
        let even = this.head.next; 
        let evenHead = even;       

        while (even && even.next) {
            odd.next = even.next;
            odd = odd.next;
            even.next = odd.next;
            even = even.next;
        }

        odd.next = evenHead;
    }
}
