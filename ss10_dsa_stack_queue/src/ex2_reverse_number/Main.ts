import {Stack} from "./Stack";

let arrNum: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let stack: Stack<number> = new Stack<number>();
arrNum.forEach(value => {
    stack.push(value);
})

while (stack.size() > 0) {
    console.log(stack.pop());
}
