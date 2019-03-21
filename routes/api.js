const express = require("express")
const router = express.Router();
const Employee = require("../models/Employee");

router.get('/', 
function(req, res, next){
  Employee.find({}).then(function(employee){
    res.send(employee);
  }).catch(next);
});

router.post('/', function(req, res, next){
  Employee.create(req.body).then(function(employee){
    res.send(employee);
  }).catch(next);
});

router.put('/:id', function(req, res, next){
  Employee.findOneAndUpdate({_id: req.params.id}, req.body).then(function(employee){
     Employee.findOne({_id: req.params.id}).then(function(employee){
      res.send(employee);
    });
  }).catch(next);
});

router.delete('/:id', function(req, res, next){
  Employee.findOneAndDelete({_id: req.params.id}).then(function(employee){
    res.send(employee);
  }).catch(next);
});

router.put('/intime/:id', function(req, res, next){
  var timeIn = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
  Employee.findOneAndUpdate({_id: req.params.id}, {$push: { "timeIn": timeIn }}).then(function(employee){
     Employee.findOne({_id: req.params.id}).then(function(employee){
      res.send(employee);
    });
  }).catch(next);
});

router.put('/outtime/:id', function(req, res, next){
  var timeOut = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
  Employee.findOneAndUpdate({_id: req.params.id}, {$push: { "timeOut": timeOut }}).then(function(employee){
     Employee.findOne({_id: req.params.id}).then(function(employee){
      res.send(employee);
    });
  }).catch(next);
});


module.exports = router;
