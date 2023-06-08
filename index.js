// Write your solution in this file!
const employee = {
  name: "john",
  streetAddress: "50-1000 ui",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
  // returns an employee with the original key value pairs and the new key value pair
  return {
    ...obj,
    [key]: value,
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  // updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee
  obj[key] = value;
  return obj;
}

function deleteFromEmployeeByKey(obj, key) {
  // deletes `key` from a clone of employee and returns the new employee (it is non-destructive)
  const newEmpl = { ...obj };
  delete newEmpl[key];
  return newEmpl;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
  // returns employee without the deleted key/value pair
  // modifies the original employee
  delete obj[key];
  return obj;
}
