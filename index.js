const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var myHost = process.env.IP;
// var excute = car.cleanCar

const app = express();

// connect to mongo database
const url = "mongodb://" + myHost + "/timeclock";
mongoose.connect(url, { useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());

app.use('/api', require('./routes/api'));


// listen for requests
app.listen(process.env.PORT, process.env.IP, function(){
    console.log('now listening for request');
});
