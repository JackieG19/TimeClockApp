const express = require('express');
const router = express.Router();
const Employees = require('../models/Employee.js');

// get a list of employee from the database
router.get('/Employee', 
function(req, res, next){
  Employees.find({}).then(function(Employees){
    res.send(Employees);
  }).catch(next);
});
// add to the db
router.post('/employee', function(req, res, next){
    Employees.create(req.body).then(function(Employees){
        res.send(Employees);
    }).catch(next);
});

// update the db
router.put('/employee/:id', function(req, res, next){
    Employees.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Employees.findOne({_id: req.params.id}).then(function(Employees){
            res.send(Employees);
        });
    }).catch(next);
});

// delete from the db
router.delete('/Employee/:id', function(req, res, next){
    Employees.findByIdAndRemove({_id: req.params.id}).then(function(Employees){
        res.send(Employees);
    }).catch(next);
});

module.exports = router;