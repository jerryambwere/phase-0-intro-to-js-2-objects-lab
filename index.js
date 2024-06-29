const employee={
    name: "moha",
    streetAddress : "la"
}
employee()
function updateEmployeeWithKeyAndValue(obj,key,value) {
    const newEmployee={...employee}
    newEmployee.name='Sam'
    newEmployee.streetAddress='11 Broadway'
    
    return newEmployee
}

updateEmployeeWithKeyAndValue()

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value) {
    employee.name="Sam"
    employee.streetAddress='12 Broadway'
    return employee
}
destructivelyUpdateEmployeeWithKeyAndValue()

function deleteFromEmployeeByKey(obj,key){
    const delet={...employee}
    delete delet.name,
    delete delet.streetAddress
return delet
}
destructivelyUpdateEmployeeWithKeyAndValue()

function destructivelyDeleteFromEmployeeByKey(obj,key) {
    delete employee.name,
delete employee.streetAddress
return employee
}
destructivelyDeleteFromEmployeeByKey()