var Artwork = require('../models/artwork');
var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var router = express.Router();
var db = mongoose.createConnection('mongodb://localhost/tate');


module.exports = router;

//Get Artwork Profile details from db
router.get('/:id', function(req, res){
	var id = req.params.id;
  Artwork.findById(id, function(err, artwork) {
     res.render('artwork/artworkProfile',
     	{artwork : artwork});
  });
});

//Edit Artwork profile and save new details to db
router.post('/:id', function(req, res){
	var id = req.params.id;
	Artwork.findById(id, function(err, artwork){
		artwork.all_artists=req.body.all_artists;
		artwork.title=req.body.title;
		artwork.dateText=req.body.dateText;
		artwork.thumbnailUrl=req.body.thumbnailUrl;
		artwork.medium=req.body.medium;
		artwork.acquisitionYear=req.body.acquisitionYear;
		artwork.save();

		res.redirect('artwork/artworkProfile');
	});
});

//Get Artwork by Year 
router.get('/acquisitionYear/:acquisitionYear', function(req, res){
	var acquisitionYear = req.params.acquisitionYear;
  	Artwork.getByYear(acquisitionYear, function(err, artwork) {
  		var random = Math.floor(Math.random() * artwork.length);
		var yearData = artwork[random];
     	res.render('artwork/artworkProfileYear',
     	{artwork : yearData});
  	});
});

//Get Artist by Artist 
router.get('/artist/:all_artists', function(req, res){
	var all_artists = req.params.all_artists;
  	Artwork.getByArtist(all_artists, function(err, artwork) {
  		var random = Math.floor(Math.random() * artwork.length);
	   	var artistData = artwork[random];
     	res.render('artwork/artworkProfileArtist',
     	{artwork : artistData});
  	});
});

//Get Artist by Medium 
router.get('/medium/:medium', function(req, res){
	var medium = req.params.medium;
  	Artwork.getByMedium(medium, function(err, artwork) {
  		var random = Math.floor(Math.random() * artwork.length);
	   	var mediumData = artwork[random];
     	res.render('artwork/artworkProfileMedium',
     	{artwork : mediumData});
  	});
});










