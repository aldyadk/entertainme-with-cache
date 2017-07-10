const mongoose = require('mongoose');

var tagSchema = mongoose.Schema({
    text:String
});

var Tag = mongoose.model('Tag',tagSchema)

module.exports = Tag;