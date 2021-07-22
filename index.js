// Write your solution in this file!
const employee = {
    'name': 'Sam',
    'streetAddress': '555 gerald way'
};

function   updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = { ...employee };
    newObj[key] = value;
    return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.streetAddress='12 Broadway';
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const cloneObj = {...employee};
    delete cloneObj.name;
    return cloneObj;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete  employee.name;
    return employee
}
