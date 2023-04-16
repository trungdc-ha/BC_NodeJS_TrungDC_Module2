class StopWatch {
    constructor(startTime, endTime) {
        this.startTime = startTime;
        this.endTime = endTime;
    }

    getStartTime() {
        return this.startTime;
    }

    getEndTime() {
        return this.endTime;
    }

    start() {
        this.startTime = Date.now();
    }

    stop() {
        this.endTime = Date.now();
    }

    getElapsedTime() {
        return this.endTime - this.startTime;
    }
}

let test = new StopWatch();
test.start();
console.log(`----------Start: ${test.getStartTime()} milliseconds--------------`)
function selectionSort(arr) {
    let currentValueNewIndex;
    for (let i = 0; i < arr.length; i++) {
        currentValueNewIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[currentValueNewIndex] > arr[j]) {
                currentValueNewIndex = j;
            }
        }
        if (i !== currentValueNewIndex) {
            let temp = arr[i];
            arr[i] = arr[currentValueNewIndex];
            arr[currentValueNewIndex] = temp;
        }
    }

    return arr;
}
const arr = [];
for (let i=0; i<100000; i++) {
    arr.push(Math.floor(Math.random() * 100000 + 1));
}
console.log(selectionSort(arr));

test.stop();
console.log(`----------End: ${test.getEndTime()} milliseconds--------------`)

console.log(`----------ElapsedTime ${test.getElapsedTime()} milliseconds--------------`)
