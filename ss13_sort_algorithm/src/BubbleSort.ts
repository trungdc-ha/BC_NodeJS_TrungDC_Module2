function bubbleSort(array: number[]) {
    let check: boolean = true;
    for (let i: number = 1; i < array.length && check; i++) {
        check = false;

        for (let j: number = 0; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp: number = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                check = true;
            }
        }
    }
    return array;
}

let arr: Array<number> = [11, 5, 3, 4, 6];
bubbleSort(arr);
console.log(arr);
