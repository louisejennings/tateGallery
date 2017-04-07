var mongo = require('mongodb');
var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://localhost/tate');

var ArtworkSchema = mongoose.Schema({
	all_artists: {
		type: String,
		index: true
	},
	title: {
		type: String
	},
	thumbnailUrl: {
		type: String
	},
	medium:{
		type: String
	},
	acquisitionYear:{
		type: Number
	}
});

var Artwork = module.exports = mongoose.model('Artwork',ArtworkSchema);

//Get All Artwork 
module.exports.getAll = (callback, limit) =>{ 
	Artwork.find().limit(100).exec(callback);
}

//Get Artwork by ID
module.exports.getArtworkById= function(id, callback){
	Artwork.findOne({_id: id})
        .exec(callback);
}

//Get Artwork by Year
module.exports.getByYear= function(acquisitionYear, callback){
	Artwork.find({acquisitionYear: acquisitionYear})
        .exec(callback);
}

//Get Artwork by Artist
module.exports.getByArtist= function(all_artists, callback){
	Artwork.find({all_artists: {$regex:all_artists}})
        .exec(callback);
}

//Get Artwork by Medium
module.exports.getByMedium= function(medium, callback){
	Artwork.find({medium: {$regex:medium}})
        .exec(callback);
}
