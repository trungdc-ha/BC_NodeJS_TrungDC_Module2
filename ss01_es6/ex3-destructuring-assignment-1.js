//Hãy cải tiến đoạn mã dưới đây bằng cách sử dụng destructuring trong ES6 để lấy được giá trị họ (lname) và tên (fname) trong đối tượng profile.
let profile = {
    fname: 'Code',
    lname: 'Gym',
    bday: new Date('1979-01-02')
}

// let fname = profile.fname;
// let lname = profile.lname;

let {fname, lname} = profile

console.log(fname, lname);