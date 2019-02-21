const db = require('../lib/database');

function getDataById (modal, check, id){
  let condition = {};
  condition[check] = id;
  return db.sync()
  .then(() => {
    return modal.findAll( {where: condition } )
   })
  .then(data => {
    if(Object.keys(data).length === 0){
      return 'record not found';
    } else{
      return data; 
    }
  })  
}

function getData (modal){
  return db.sync()
  .then(() => {
    return modal.findAll()
  })
}

function addData (modal, modalValues){
  db.sync()
    .then(() => {
    modal.create(modalValues)
  })
}

module.exports = {
  getDataById,
  getData,
  addData
};