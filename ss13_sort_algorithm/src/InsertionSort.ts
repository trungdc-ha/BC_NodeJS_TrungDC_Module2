function insertionSort(array: number[]) {
    for (let i: number = 1; i < array.length; i++) {
        let currentElement: number = array[i];
        let k: number = i - 1;
        for (; k >= 0 && array[k] > currentElement; k--) {
            array[k + 1] = array[k];
        }
        array[k + 1] = currentElement;
    }
}

let myArray: Array<number> = [2, 9, 5, 4, 8, 1];
insertionSort(myArray);
console.log(myArray);
