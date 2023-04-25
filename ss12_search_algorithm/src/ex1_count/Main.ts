function countNumber1(numbers: Array<number>, value: number) {
    let count: number = 0;
    numbers.map(num => {
        if (num === value) {
            count++;
        }
    })
    return count;
}

function countNumber2(arr:Array<number>, kq:number) {
    const result = arr.reduce((prev, value) => {
        if (kq === value) {
            return ++prev;
        }
        return prev;
    }, 0);
    return result;
}

let arr: number[] = [1, 1, 2, 2, 1, 5, 6];
let kq = 1;
let result = countNumber1(arr, kq);
console.log(result);

console.log(countNumber2(arr, kq))
