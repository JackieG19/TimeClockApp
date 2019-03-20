const express = require('express');
const router = express.Router();
const Employees = require('../models/Employee.js');

// get a list of employee from the database
router.get('/employee', function(req, res, next){
  Employees.find({}).then(function(employees){
    res.send(employees);
  }).catch(next);
});

// add to the db
router.post('/employee', function(req, res, next){
    Employees.create(req.body).then(function(employees){
        res.send(employees);
    }).catch(next);
});

// update the db
router.put('/employee/:id', function(req, res, next){
    Employees.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Employees.findOne({_id: req.params.id}).then(function(employees){
            res.send(employees);
        });
    }).catch(next);
});

// delete from the db
router.delete('/employee/:id', function(req, res, next){
    Employees.findByIdAndRemove({_id: req.params.id}).then(function(employees){
        res.send(employees);
    }).catch(next);
});

module.exports = router;