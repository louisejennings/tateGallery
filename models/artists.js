var mongo = require('mongodb');
var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://localhost/tate');

var ArtistSchema = mongoose.Schema({
	fc: {
		type: String,
		index: true
	},
	gender: {
		type: String
	},
	birthYear: {
		type: Number
	},
	totalWorks: {
		type: Number
	}
});

var Artist = module.exports = mongoose.model('Artist',ArtistSchema);

//Get All Artists 
module.exports.getAll = (callback, limit) =>{ 
	Artist.find().limit(100).exec(callback);
}

//Get Artist by ID
module.exports.getArtistById= function(id, callback){
	Artist.findOne({_id: id})
        .exec(callback);
}

//Get Artist by Year
module.exports.getArtistByYear= function(birthYear, callback){
	Artist.find({birthYear: birthYear})
        .exec(callback);
}

//Get Artist by Total Amount
module.exports.getArtistByAmount= function(totalWorks, callback){
	Artist.find({totalWorks: totalWorks})
        .exec(callback);
}

//Get Artist by Gender
module.exports.getArtistByGender= function(gender, callback){
	Artist.find({gender: gender})
        .exec(callback);
}

