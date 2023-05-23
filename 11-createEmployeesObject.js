export default function createEmployeeObject(departmentName, employees){
    const employee = {};

    employee[departmentName] = employees;
    return employee;

}