var express = require('express'); //include express
var router = express.Router();	//set up Router
var fs = require('fs'); //file system
var Artist = require('../models/artists');
var Artwork = require('../models/artwork');
var Movies = require('../models/movies');

var mongo = require('mongodb');
var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://localhost/tate');

module.exports = router; 

//Display Homepage
router.get('/',function(req, res) { //
    res.render('index');
});

//Display all Artwork on Artwork Index Page
router.get('/artwork',function(req, res) { //
  Artwork.getAll(function(err, artworks) {
    res.render('artwork/', { artworks: artworks });
  });
});

//Display all Artist on Artist Index Page
router.get('/artists',function(req, res) { //
  Artist.getAll(function(err, artists) {
    res.render('artists/', { artists: artists });
  });
});

//Display all Movies on Movie Index Page
router.get('/movies',function(req, res) { //
  Movies.getAll(function(err, movies) {
    res.render('movies/', { movies: movies });
  });
});

