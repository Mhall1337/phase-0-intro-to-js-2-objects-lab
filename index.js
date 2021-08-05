const employee = {}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const cloneObj = Object.assign({}, employee);
    cloneObj[key] = value;
    return cloneObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign(employee, {[key]:value})
}
function deleteFromEmployeeByKey(employee, key){
    const cloneObj = Object.assign({}, employee)
    delete cloneObj[key]
    return cloneObj
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}