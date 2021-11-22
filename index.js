// Write your solution in this file!
const employee ={};

function updateEmployeeWithKeyAndValue(employee, key, value) {
return Object.assign({}, employee, {[key]: value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    //this function should work the same as updateemployeeWithKeyAndValue() but it should mutate the employee parameter passed in.
    employee[key] = value;
  
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    // this function should take in a employee Object and a key. It should delete the key/value pair for the key that was passed in from the employee Object. This should all not actually mutate the employee passed in.
    const NEW_OBJ =  Object.assign({}, employee);
    delete NEW_OBJ[key];
    return NEW_OBJ;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
  //this function should work the same as deleteFromemployeeByKey() but it should mutate the employee passed in.
  Object.assign({}, employee);
  delete employee[key];
  return employee;
  }