import {StudentList} from "./StudentList";
import {Node} from "./Node";


let studentManage = new StudentList();
studentManage.insertFirst(new Node("Nguyen Van A", 9, ))
studentManage.insertFirst(new Node("Nguyen Van B", 3, ))
studentManage.insertFirst(new Node("Nguyen Van C", 7, ))
studentManage.insertLast(new Node("Nguyen Van D", 10, ))

console.log("-------------------showList----------------------")
studentManage.showList();
console.log("-------------------totalStudentsFail----------------------")
studentManage.totalStudentsFail();
console.log("-------------------listStudentMaxScore----------------------")
studentManage.listStudentMaxScore();
console.log("-------------------findByName----------------------")
let keyword = "van c";
studentManage.findByName(keyword);