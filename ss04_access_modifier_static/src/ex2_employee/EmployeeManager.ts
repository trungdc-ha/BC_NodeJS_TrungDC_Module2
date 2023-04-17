import Employee from "./Empoyee";

class EmployeeManager {
    private static _employees: Employee[] = []


    static get employees(): Employee[] {
        return this._employees;
    }

    static set employees(value: Employee[]) {
        this._employees = value;
    }

    showAll() {
        EmployeeManager._employees.forEach((emp, index) => {
            console.log(`index: ${index}`, emp)
        })
    }

    addNew(employee: Employee){
        EmployeeManager._employees.unshift(employee);
    }

    findByIndex(index: number){
        return EmployeeManager._employees[index];
    }

    removeByIndex(index: number) {
        EmployeeManager._employees.slice(index, 1);
    }

    updateByIndex(index: number, employee: Employee){
        EmployeeManager._employees[index] = employee;
    }
}

export default EmployeeManager;
