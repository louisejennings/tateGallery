var mongo = require('mongodb');
var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://localhost/tate');

var MoviesSchema = mongoose.Schema({
	movieTitle: {
		type: String,
		index: true
	},
	directors: {
		type: String
	},
	year: {
		type: Number
	},
	genres: {
		type: String
	},
	image_url: {
		type: String
	}
});

var Movies = module.exports = mongoose.model('Movies',MoviesSchema);

//Get All Movies 
module.exports.getAll = (callback, limit) =>{ 
	Movies.find().limit(100).exec(callback);
}

//Get Movies by ID
module.exports.getMoviesById= function(id, callback){
	Movies.findOne({_id: id})
        .exec(callback);
}

//Get Movies by Year
module.exports.getMoviesByYear= function(year, callback){
	Movies.find({year: year})
        .exec(callback);
}

//Get Movies by Director
module.exports.getMoviesByDirector= function(directors, callback){
	Movies.find({directors: directors})
        .exec(callback);
}

//Get Movies by Genre
module.exports.getMoviesByGenre= function(genres, callback){
	Movies.find({genres: genres})
        .exec(callback);
}


