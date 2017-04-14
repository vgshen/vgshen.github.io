var mysql = require('mysql');
var client = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  port:'8306',
  database:"test"
});
client.connect();
function getEntity(callback){
  client.query('select * from user',function(err,res){
    if(err)
    console.log(err);
    callback(res);
  });
}
exports.getEntity = getEntity;
