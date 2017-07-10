var mongoose = require('mongoose');
var url = 'mongodb://localhost/myCachingApp'
mongoose.connect(url);
const Movie = require('../models/movie')
const Tag = require('../models/tag')

var getAll = (req,res)=>{
  Movie.find((err,data)=>{
    var obj = {info:"movies found successfully",data}
    res.send(obj)
  });
}

var create = (req,res)=>{
  let movie = new Movie({
    title:req.body.title,
    overview:req.body.overview,
    poster_path:req.body.poster_path,
    popularity:req.body.popularity,
    tag:createTag(req.body.tag)
  })
  movie.save((err,movieResult)=>{
    res.send(movieResult)
  })
}

var createTag = (tags)=>{
  if(tags){
    let Arr = []
    let tagsArr = tags.split(',').map(item=>item.trim()).forEach(tag=>{
      let myTag = new Tag ({text:tag})
      Arr.push(myTag)
      myTag.save()
    })
    return Arr
  }
}

var getTags = (req,res)=>{
  Tag.find((err,data)=>{
    var obj = {info:"tag found successfully",data}
    res.send(obj)
  });
}

var deleteMovies = (req,res)=>{
  Movie.remove({},(err,result)=>{
    res.send(`Successfully deleted from collection ${result}`)
  })
}

var deleteTags = (req,res)=>{
  Tag.remove({},(err,result)=>{
    res.send(`Successfully deleted from collection ${result}`)
  })
}

module.exports = {
  'getAll':getAll,
  'create':create,
  'createTag':createTag,
  'getTags':getTags,
  'deleteMovies':deleteMovies,
  'deleteTags':deleteTags,
};