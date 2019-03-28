const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var myHost = process.env.IP;

const app = express();

// connect to mongo database
const url = "mongodb://" + myHost + "/timeclock";


mongoose.connect(url, { useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false });
mongoose.Promise = global.Promise;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

// app.get('/', (req, res) => {
//     res.send('hello world');
// });

// app.get('/api/Employee', (req, res) => {
//     res.send([]);
// });

// app.get('/api/Employee/:id', (req, res) => {
//     //res.send(req.params.id);
//     const employee = employee.find(c => c.id === parseInt(req.params.id));
//     if(!employee) res.status(404).send("id not found");
//     res.send(employee)
// });

app.listen(process.env.PORT, process.env.IP, function(){
  console.log('now listening for request');
});

