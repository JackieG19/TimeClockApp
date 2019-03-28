const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const http = require('http');

console.log("listening to myHost");

var myHost = process.env.IP;

const app = express();

// connect to mongo database
const url = "mongodb://" + myHost + "/timeclock";


mongoose.connect(url, { useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false });
mongoose.Promise = global.Promise;

app.use(express.static("./public"));

app.use(bodyParser.json());

app.use('/', require('index'));

app.use('/api', require('./routes/api'));

app.listen(process.env.PORT, process.env.IP, function(){
  console.log('now listening for request');
});