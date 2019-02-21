const express = require('express');
const projectRouter = express.Router();
const {
  getProject,
  getProjectById,
  addProject
} = require('../controllers/index');

projectRouter.get('/', getProject);
projectRouter.get('/:id', getProjectById);
projectRouter.post('/', addProject);

module.exports = projectRouter;
