const mongoose = require('mongoose');

var tvSchema = mongoose.Schema({
    title:String,
    overview:String,
    poster_path:String,
    popularity:Number,
    tag: Array
});

var Tv = mongoose.model('Tv',tvSchema)

module.exports = Tv;