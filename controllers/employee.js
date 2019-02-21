const Employee = require('../modal/employee');
const {
  getDataById,
  getData,
  addData,
} = require('../services/index');

function getEmployees(req, res) {
  getData(Employee)
    .then(data => res.send(data))
    .catch(err => res.send(err));
}


function getEmployeeById(req, res) {
  getDataById(Employee, 'emp_id', req.params.id)
    .then(data => res.send(data))
    .catch(err => res.send(err));
}


function addEmployee(req) {
  const employee = {};
  employee.emp_id = req.body.emp_id;
  employee.emp_name = req.body.emp_name;
  employee.address = req.body.address;
  employee.salary = req.body.salary;
  addData(Employee, employee);
}

module.exports = {
  getEmployees,
  getEmployeeById,
  addEmployee,
};
