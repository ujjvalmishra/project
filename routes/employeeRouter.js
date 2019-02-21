const express = require('express');
const employeeRouter = express.Router();
const {
  getEmployees,
  getEmployeeById,
  addEmployee
} = require('../controllers/index');

employeeRouter.get('/', getEmployees);
employeeRouter.get('/:id', getEmployeeById);
employeeRouter.post('/', addEmployee);

module.exports = employeeRouter;
