var express = require('express');
var router = express.Router();
var db = require('./db');
router.get('/',function(req,res){
  db.getEntity(function(result){
    if(result[0]===undefined){
      alert("没有用户");
    }else{
      alert("ok");
    }
  });
});
