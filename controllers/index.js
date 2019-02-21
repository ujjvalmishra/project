const {
  getProject,
  getProjectById,
  addProject,
} = require('./project');

const {
  getEmployees,
  getEmployeeById,
  addEmployee,
} = require('./employee');

module.exports = {
  getEmployees,
  getEmployeeById,
  addEmployee,
  getProject,
  getProjectById,
  addProject,
};
