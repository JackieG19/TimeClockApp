const express = require('express');
const router = express.Router();
const Employees = require('../models/Employee.js');

//get a list of employee from the database
router.get('/', function(req, res, next){
  Employees.find({}).then(function(employees){
    res.send(employees);
  }).catch(next);
});

// add to the db
router.post('/', function(req, res, next){
    Employees.create(req.body).then(function(employees){
        res.send(employees); // this method is used to send the HTTP response
    }).catch(next);
});


// update the db
router.put('/:id', function(req, res, next){
    Employees.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Employees.findOne({_id: req.params.id}).then(function(employees){
            res.send(employees);
        });
    }).catch(next);
});

// The findOne() method returns the first occurrence in the selection.

// delete from the db
router.delete('/:id', function(req, res, next){
    Employees.findByIdAndRemove({_id: req.params.id}).then(function(employees){
        res.send(employees);
    }).catch(next);
});

// grabbing the employee clocking in
router.put('/intime/:id', function(req, res, next){
  var timeIn = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
  Employees.findOneAndUpdate({_id: req.params.id}, {$push: { "timeIn": timeIn }}).then(function(employee){
     Employees.findOne({_id: req.params.id}).then(function(employee){
      res.send(employee);
    });
  }).catch(next);
});


// grabbing the employee clocking out
router.put('/outtime/:id', function(req, res, next){
  var timeOut = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
  Employees.findOneAndUpdate({_id: req.params.id}, {$push: { "timeOut": timeOut }}).then(function(employee){
     Employees.findOne({_id: req.params.id}).then(function(employee){
      res.send(employee);
    });
  }).catch(next);
});

// new Date() creates a new date object with the current date and time:
// The toLocaleString() method returns a string with a language sensitive representation of this date.

module.exports = router;