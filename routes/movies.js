var Movies = require('../models/movies');
var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var router = express.Router();
var db = mongoose.createConnection('mongodb://localhost/tate');

module.exports = router;

//Get Movies details from db
router.get('/:id', function(req, res){
	var id = req.params.id;
  Movies.findById(id, function(err, movies) {
     res.render('movies/moviesProfile',
     	{movies : movies});
  });
});

//Edit Movies and save new details to db
router.post('/:id', function(req, res){
	var id = req.params.id;
	Movies.findById(id, function(err, movies){
		movies.movieTitle=req.body.movieTitle;
		movies.directors=req.body.directors;
		movies.year=req.body.year;
		movies.genres=req.body.genres;
		movies.image_url=req.body.image_url;
		movies.save();

		res.redirect('movies/moviesProfile');
	});
});

//Get Movies by Year 
router.get('/year/:year', function(req, res){
	var year = req.params.year;
  	Movies.getMoviesByYear(year, function(err, movies) {
  		var random = Math.floor(Math.random() * movies.length);
		var yearData = movies[random];
     	res.render('movies/moviesProfileYear',
     	{movies : yearData});
  	});
});

//Get Movies by Genres 
router.get('/genres/:genres', function(req, res){
	var genres = req.params.genres;
  	Movies.getMoviesByGenre(genres, function(err, movies) {
  		var random = Math.floor(Math.random() * movies.length);
	   	var genresData = movies[random];
     	res.render('movies/moviesProfileGenres',
     	{movies : genresData});
  	});
});

//Get Movies by Directors 
router.get('/directors/:directors', function(req, res){
	var directors = req.params.directors;
  	Movies.getMoviesByDirector(directors, function(err, movies) {
  		var random = Math.floor(Math.random() * movies.length);
	   	var directorsData = movies[random];
     	res.render('movies/moviesProfileDirectors',
     	{movies : directorsData});
  	});
});









