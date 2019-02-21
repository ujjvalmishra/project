const Sequelize = require('sequelize');
const db = require('../lib/database');
const Employee = db.define('employee', {
  emp_id: { type: Sequelize.STRING, primaryKey: true,  allowNull: false },
  emp_name: { type: Sequelize.STRING,  allowNull: false },
  address: { type: Sequelize.STRING,  allowNull: false },
  salary: { type: Sequelize.INTEGER,  allowNull: false }
})

module.exports = Employee;