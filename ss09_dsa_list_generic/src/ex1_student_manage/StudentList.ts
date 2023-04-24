import {Node} from "./Node";

export class StudentList {
    size: number;
    head: Node | null;
    tail: Node | null;

    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    insertFirst(data: Node) {
        if (this.head) {
            data.next = this.head;
            this.head = data;
        } else {
            this.head = data;
            this.tail = data;
        }
        this.size++;
    }

    insertLast(data: Node) {
        if (this.tail) {
            this.tail.next = data;
        } else {
            this.head = data;
            this.tail = data;
        }
        this.size++;
    }

    showList() {
        let node: Node | null | undefined = this.head;
        for (let i = 0; i < this.size; i++) {
            console.log(node?.name, node?.point);
            node = node?.next;
        }
    }

    totalStudentsFail() {
        let node: Node | null | undefined = this.head;
        for (let i = 0; i < this.size; i++) {
            if(node?.point && node?.point <= 5){
                console.log(node?.name, node?.point);
            }
            node = node?.next;
        }
    }

    listStudentMaxScore() {
        let node: Node | null | undefined = this.head;
        for (let i = 0; i < this.size; i++) {
            if(node?.point && node?.point >= 8){
                console.log(node?.name, node?.point);
            }
            node = node?.next;
        }
    }

    findByName(keyword:string) {
        let node: Node | null | undefined = this.head;
        for (let i = 0; i < this.size; i++) {
            if(node?.name && node?.name.toLowerCase().includes(keyword.toLowerCase())){
                console.log(node?.name, node?.point);
            }
            node = node?.next;
        }
    }
}