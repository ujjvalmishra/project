const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const { projectRouter, employeeRouter } = require('./routes/index');

app.use(bodyParser.json());
app.use('/project', projectRouter);
app.use('/employee', employeeRouter);

const db = require('./lib/database');

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.log('Unable to connect to the database:', err);
  });

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
