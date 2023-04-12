// Hãy viết mã sử dụng các phương thức mảng (như, filter và reduce)
// để tính tổng giá trị của các máy (type = “machine”) trong mảng hàng tồn kho (inventory).

const inventory = [
    {type: "machine", value: 5000},

    {type: "machine", value: 650},

    {type: "duck", value: 10},

    {type: "furniture", value: 1200},

    {type: "machine", value: 77}
]

let totalMachineValue = inventory
    .filter((value) => value.type === 'machine')
    .reduce((total, currentObject) => total + currentObject.value, 0)

console.log(totalMachineValue)