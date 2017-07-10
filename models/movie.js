const mongoose = require('mongoose');

var movieSchema = mongoose.Schema({
    title:String,
    overview:String,
    poster_path:String,
    popularity:Number,
    tag: Array
});

var Movie = mongoose.model('Movie',movieSchema)

module.exports = Movie;