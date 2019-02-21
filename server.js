const request = require('request');
const express = require('express');
const app = express();
const {projectRouter,employeeRouter} = require('./routes/index');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/project', projectRouter);
app.use('/employee', employeeRouter);

const db = require('./lib/database');

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(3000, function () {
 console.log("App listening on port 3000!");
});