var Artworks = require('../models/artwork');
var Artist = require('../models/artists');
var Movies = require('../models/movies');
var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var router = express.Router();
var db = mongoose.createConnection('mongodb://localhost/tate');
var Handlebars = require('handlebars');

module.exports = router;

/* Get first word of Medium */
Handlebars.registerHelper('firstwordMedium', function(medium) {
  var med = medium.split(/[ ,]+/);
  return med[0];
});

/* Truncate Art Title */
Handlebars.registerHelper ('truncate', function (title) {
  if (title.length > 16) {  
    var new_str = title.substr (0, 10+5);
    return new Handlebars.SafeString ( new_str ); 
  }
  return title;
});

/* Truncate Artist Name in Artists Collection*/
Handlebars.registerHelper ('truncArtist', function (fc) {
  if (fc.length > 18) {  
    var new_str = fc.substr (0, 10+7);
    return new Handlebars.SafeString (new_str); 
  }
  return fc;
});

/* Truncate Movie Title*/
Handlebars.registerHelper ('truncMovie', function (movieTitle) {
  if (movieTitle.length > 18) {  
    var new_str = movieTitle.substr (0, 10+7);
     return new Handlebars.SafeString ( new_str); 
  }
  return movieTitle;
});

/* Change Director Name to First Initial. Surname Movies Collection*/
Handlebars.registerHelper('dirName', function(directors) {
  var director = directors.split(" ");
  var firstName = director[0];
  var surname =director[1];
  var inital = firstName.substr(0,1);
  return inital +". "+ surname;
});

/* Change Artist Name to First Initial. Surname Artworks Collection*/
Handlebars.registerHelper('artistName', function(all_artists) {
  var artist = all_artists.split(" ");
  var firstName = artist[0];
  var surname =artist[1];
  var inital = firstName.substr(0,1);
  return inital +". "+ surname;
});