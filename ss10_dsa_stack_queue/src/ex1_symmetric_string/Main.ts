import {Stack} from "./Stack";
import {Queue} from "./Queue";

let str: string = "able was I ere I saw elba";
let arr: string[] = str.split("");

let stack: Stack<string> = new Stack<string>();
let queue: Queue<string> = new Queue<string>();
arr.forEach(value => {
    stack.push(value);
    queue.enqueue(value);
})

let isSymmetric: boolean = true;
while (stack.size() > 0) {
    if (stack.pop() != queue.dequeue()) {
        isSymmetric = false;
        break;
    }
}
console.log(isSymmetric ? "Symmetric" : "Not Symmetric");
