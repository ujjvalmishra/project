const Sequelize = require('sequelize');
const db = require('../lib/database');
const Project = db.define('project', {
  p_id: { type: Sequelize.STRING, primaryKey: true,  allowNull: false },
  p_name: { type: Sequelize.STRING,  allowNull: false },
  days: { type: Sequelize.INTEGER,  allowNull: false },
  cost: { type: Sequelize.INTEGER,  allowNull: false }
})

module.exports = Project;