var Artist = require('../models/artists');
var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var router = express.Router();
var db = mongoose.createConnection('mongodb://localhost/tate');

module.exports = router;

//Get Artist Profile details from db
router.get('/:id', function(req, res){
	var id = req.params.id;
  Artist.findById(id, function(err, artist) {
     res.render('artists/artistProfile',
     	{artist : artist});
  });
});

//Edit Artist profile and save new details to db
router.post('/:id', function(req, res){
	var id = req.params.id;
	Artist.findById(id, function(err, artist){
		artist.fc=req.body.fc;
		artist.gender=req.body.gender;
		artist.birthYear=req.body.birthYear;
		artist.totalWorks=req.body.totalWorks;
		artist.save();
		res.redirect('artists/artistProfile');
	});
});

//Get Artist by BirthYear 
router.get('/birthYear/:birthYear', function(req, res){
	var birthYear = req.params.birthYear;
  	Artist.getArtistByYear(birthYear, function(err, artist) {
  		var random = Math.floor(Math.random() * artist.length);
		var yearData = artist[random];
     	res.render('artists/artistBirthYear',
     	{artist : yearData});
  	});
});

//Get Artist by Amount 
router.get('/totalWorks/:totalWorks', function(req, res){
  var totalWorks = req.params.totalWorks;
    Artist.getArtistByAmount(totalWorks, function(err, artist) {
      var random = Math.floor(Math.random() * artist.length);
    var amountData = artist[random];
      res.render('artists/artistAmount',
      {artist : amountData});
    });
});
//Get Artist by Gender 
router.get('/gender/:gender', function(req, res){
	var gender = req.params.gender;
  	Artist.getArtistByGender(gender, function(err, artist) {
  		var random = Math.floor(Math.random() * artist.length);
	   	var genderData = artist[random];
     	res.render('artists/artistGender',
     	{artist : genderData});
  	});
});