/*
Hàm detectCollision tìm kiếm trong một mảng hình chữ nhật và trả về hình chữ nhật đầu tiên có chứa điểm được xác định.

Hãy sử dụng cấu trúc hủy (destructuring assignment) và các hàm thứ bậc cao (Higher-order function) để làm cho đoạn mã dưới đây sạch và gọn gàng hơn.
Bạn có thể sử dụng phương thức tìm mảng mới có tên là find, phương thức này nhận một hàm làm đối số và trả về giá trị của phần tử đầu tiên trong mảng
mà hàm đối số trả về true.
 */

// function detectCollision(objects, point) {
//     for (let i = 0; i < objects.length; i++) {
//         let object = objects[i]
//         if (point.x >= object.x && point.x <= object.x + object.width &&
//             point.y >= object.y && point.y <= object.y + object.height)
//             return object
//     }
// }

const myObjects = [
    {x: 10, y: 20, width: 30, height: 30},
    {x: -40, y: 20, width: 30, height: 30},
    {x: 0, y: 0, width: 10, height: 5}
]


const detectCollision = (objects, {x, y}) => {
    return myObjects.find(object => {
        return x >= object.x && x <= object.x + object.width &&
            y >= object.y && x <= object.y + object.height
    })
}

console.log(detectCollision(myObjects, {x: 4, y: 2}))