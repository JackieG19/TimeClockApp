const express = require("express")
const router = express.Router();
const Employee = require("../models/Employee");

router.get('/employees', (req, res) => {
  const query = req.query;
  
Employee.find({})
  .then(employee => {
    res.json({
      comfirmation: 'success',
      data: employee
    });
})
.catch(err => {
  res.json({
      comfirmation: 'fail',
      data: err.message
    });
})

router.get('/employees/:id', (req, res) => {
  const id = req.param.id;
  
Employee.findById(id)
  .then(employee => {
    res.json({
      comfirmation: 'success',
      data: employee
    });
})
.catch(err => {
  res.json({
      comfirmation: 'fail',
      data: 'Employees' + id + 'not found'
    });
  })
})

router.post('/employees', (req, res) => {
  Employee.create(req.body)
  .then(employee => {
    res.json({
      comfirmation: 'success',
      data: employee
    });
})
.catch(err => {
  res.json({
      comfirmation: 'fail',
      data: err.message
    });
  })
})

// router.put('/employees/:id', function(req, res, next){
//   Employee.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(employee){
//     Employee.findOne({_id: req.params.id}).then(function(employee){
//       res.send(employee);
//     });
//   }).catch(next);
// });

// router.delete('/employees/:id', function(req, res, next){
//   Employee.findByIdAndDelete({_id: req.params.id}).then(function(employee){
//     res.send(employee);
//   }).catch(next);
// });

module.exports = router;
