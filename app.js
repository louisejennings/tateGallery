//import modules required for the project
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var expressHandlebars = require('express-handlebars');
var expressSession = require('express-session');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/tate');
var fs = require('fs'); 

 //routes are defined here
var routes = require('./routes/index');
var artists = require('./routes/artists');
var artwork = require('./routes/artwork');
var movies = require('./routes/movies');
var helpers = require('./middleware/helpers');

//Initialize an Express Application
var app = express();

var expH = expressHandlebars.create({
    helpers: helpers,
    layoutsDir:__dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
});

//View Engine
app.set('views', path.join(__dirname, 'views')); //folder called 'views'
app.engine('handlebars', expressHandlebars({defaultLayout:'layout'})); //set handlebars as the app.engine and the default layout file is 'layout.handlebars'
app.set('view engine', 'handlebars'); //set the view engine to handlebars

//BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Declare public directory to be used as a store for static files
app.use(express.static(path.join(__dirname, 'public'))); 

//Express Session (Middleware for Express Session)
app.use(expressSession({
	secret: 'LouiseJennings',
	saveUninitialized: true,
	resave: true
}));

//Middleware for route files
app.use('/', routes); //brings you to index file
app.use('/artists', artists);
app.use('/artwork', artwork); 
app.use('/movies', movies); 

//Set Port
app.set('port', (process.env.PORT || 3033)); //port 3033  

app.listen(app.get('port'), function(){
	console.log('The application is listening on port ' + app.get('port'));
});

module.exports = app;
