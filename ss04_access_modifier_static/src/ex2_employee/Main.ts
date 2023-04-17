import Employee from "./Empoyee";
import EmployeeManager from "./EmployeeManager";

let employee1 = new Employee("A", "Nguyen Van", "11/11/21", "dev");
let employee2 = new Employee("B", "Nguyen Van", "11/11/21", "tester");
let employee3 = new Employee("C", "Nguyen Van", "11/11/21", "PM");

let employeeManager = new EmployeeManager();
employeeManager.addNew(employee1);
employeeManager.addNew(employee2);

employeeManager.showAll();
employeeManager.updateByIndex(0, employee3);

console.log("===============================================")
employeeManager.showAll();
