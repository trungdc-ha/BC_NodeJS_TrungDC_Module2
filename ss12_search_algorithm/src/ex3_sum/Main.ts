let matrix = [
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]
]

let sum = 0;
for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        // if (matrix[row][col] != 0) {
        //     if (row == 0) {
        //         sum += matrix[row][col];
        //     } else if (matrix[row - 1][col] != 0) {
        //         sum += matrix[row][col];
        //     }
        // }

        if(matrix[row][col] == 0 || (row > 0 && matrix[row-1][col] == 0)){
            continue
        } else {
            sum += matrix[row][col];
        }
    }
}

console.log(sum)
