const express = require('express');
// here is grabbing the main Express module from the package you installed.

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const MongoClient = require("mongodb").MongoClient;

var myHost = process.env.IP;
// var excute = car.cleanCar

const app = express();

// connect to mongo database
const url = "mongodb://" + myHost + "/timeclock";
// passing in a connection string to go out and find the database that i want to connect to

mongoose.connect(url, { useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false });
mongoose.Promise = global.Promise;
// mongoose version of the promise is deprecated
// Promises are returned from executed queries

app.use(express.static('public'));
// To serve static files such as images, CSS files, and JavaScript files, 
// use the express.static built-in middleware function in Express.


app.use(bodyParser.json());
// tells the system that you want json to be used

app.use('/api', require('./routes/api'));

// connect to the db and start the express 
let db;

MongoClient.connect(url, { useNewUrlParser: true }, (err, database) => {
  if(err) {
    return console.log(err);
  }
  db = database;
  // start the express web server listening on 8080
 app.listen(process.env.PORT, process.env.IP, function(){
     console.log('now listening for request');
  });
});
