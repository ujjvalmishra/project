const db = require('../lib/database');
const Project = require('../modal/project');
const {
  getDataById,
  getData,
  addData
} = require('../services/index');

function getProject (req, res){
  getData(Project)
  .then(data => res.send(data))
  .catch(err => console.log(err));
}


function getProjectById (req, res){
  getDataById(Project, 'p_id', req.params.id)
  .then(data => res.send(data))
  .catch(err => console.log(err));
}


function addProject (req, res){
  let project = {};
  project.p_id = req.body.p_id;
  project.p_name = req.body.p_name;
  project.days = req.body.days;
  project.cost = req.body.cost;
  addData(Project, project);
}

module.exports = {
  getProject,
  getProjectById,
  addProject
};