function countNumber(numbers: Array<number>, value: number) {
    let count: number = 0;
    numbers.map(num => {
        if (num === value) {
            count++;
        }
    })
    return count;
}

let arr: number[] = [1, 1, 2, 2, 1, 5, 6];
let kq = 1;
let result = countNumber(arr, kq);
console.log(result)

// @ts-ignore
const result1 = arr.reduce((prev, value) => {
    if (kq === value) {
        return ++prev;
    }
    return prev;
}, 0)

console.log(result1)
