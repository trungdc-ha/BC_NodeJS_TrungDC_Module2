function selectionSort(array: number[]) {
    for (let i: number = 0; i < array.length - 1; i++) {
        let minValue: number = array[i];
        let minIndex: number = i;

        for (let j: number = i + 1; j < array.length; j++) {
            if (minValue > array[j]) {
                minValue = array[j];
                minIndex = j;
            }
        }

        if (minIndex != i) {
            let temp: number = array[i];
            array[i] = minValue;
            array[minIndex] = temp;
        }
    }
}

let myArray1: Array<number> = [2, 9, 5, 4, 8, 1];
selectionSort(myArray1);
console.log(myArray1);
