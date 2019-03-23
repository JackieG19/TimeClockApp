const express = require('express');
// here is grabbing the main Express module from the package you installed.

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const MongoClient = require('mongodb').MongoClient;
// Connect to MongoDB using a url as documented


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

// serve the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + './public/index.html');
});

app.use(bodyParser.json());
// tells the system that you want json to be used

app.use('/api', require('./routes/api'));

let db; 
// Binds variables for use in the specified expression, 
// and returns the result of the expression

// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, (err, database) => {
  if(err) {
    return console.log(err);
  }
  db = database;
  // listen for requests
  app.listen(process.env.PORT, process.env.IP, function(){
    console.log('now listening for request');
  });
});

// add a document to the DB collection recording the click event
app.post('/clicked', (req, res) => {
  const click = {clickTime: new Date()};
  console.log(click);
  
// const EmployeeSchema = new Schema({
//     firstName: {
//         type: String
//     },
//     lastName: {
//         type: String
//     },
//     employeeId:{
//         type: Number,
//         required: true
//     },
//     companyName: {
//         type: String
//     },
//     deptName: {
//         type: String
//     },
//     timeIn:Array,
//     timeOut: Array,
//     sessionTotals: {SessionSchema},
//     isClockedIn: {
//         type: Boolean
//     }
// });
 
// var user = mongoose.model('emp', Schema);
 
// app.get('/view', function(req, res){
// 	user.find({}, function(err, docs){
// 		if(err) res.json(err);
// 		else    res.render('index', {users: docs});
// 	});
// });
 
// app.post('/new', function(req, res){
// 	new user({
// 		_id    : req.body.email,
// 		name: req.body.name,
// 		age   : req.body.age				
// 	}).save(function(err, doc){
// 		if(err) res.json(err);
// 		else    res.redirect('/view');
// 	});
// });
  
});