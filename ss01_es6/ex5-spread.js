//Hãy viết lại mã ngắn gọn hơn cho ba hàm dưới đây bằng cách sử dụng cú pháp spread.
//Hàm đầu tiên có tên là replace, thay thế một phần của mảng bằng các phần tử từ mảng khác.
// function replace(array, from, to, elements) {
//     array.splice.apply(array, [from, to - from].concat(elements))
// }

//https://codelearn.io/sharing/bind-call-va-apply-trong-javascript

function replace(array, from, to, elements) {
    array.splice(from, to - from, ...elements)

}

let testArray = [1, 2, 100, 100, 6]
replace(testArray, 2, 4, [3, 4, 5])
console.log(testArray)


//Hàm thứ hai có tên là copyReplace, cũng thực hiện công việc tương tự, nhưng tạo một mảng mới thay vì sửa đổi đối số của nó.
function copyReplace(array, from, to, elements) {
    return array.slice(0, from).concat(elements).concat(array.slice(to))
}


console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]))
console.log([4,5,6].slice(1))