var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var swig = require('swig');
var mongoose = require('mongoose');
//Controllers
var standUpController = require('./controllers/standup.controller');

//Create an Express instance
var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());

//Mongo configuration
//Connect to mongo
mongoose.connect("mongodb://localhost:27017/standupmeetingnotes",function(err,db){
(!err)?console.log("we are connected"):console.log("error connecting",err)});//end:connect

//Custom middleware - This is require to allow OPTIONS from CORS client
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//STEP 1: Simple POST test
app.post('/api/email',function(req,res){
  console.log('Request body is: ', req.body);
  standUpController.create(req,res);
});//end:post

//Finally - create a server and a port to listen to
var server = app.listen(5000,function(){
  console.log('Listening on port', server.address().port); // tell us on which port the server is listening
});//end:server
