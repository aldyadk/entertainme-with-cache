var mongoose = require('mongoose');
var url = 'mongodb://localhost/myCachingApp'
mongoose.connect(url);
const Tv = require('../models/tv')
const Tag = require('../models/tag')

var getAll=(req,res)=>{
  Tv.find((err,data)=>{
    var obj = {info:"tv found successfully",data}
    res.send(obj)
  });
}

var create = (req,res)=>{
  let tv = new Tv({
    title:req.body.title,
    overview:req.body.overview,
    poster_path:req.body.poster_path,
    popularity:req.body.popularity,
    tag:createTag(req.body.tag)
  })
  tv.save((err,movieResult)=>{
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

module.exports = {
  'getAll': getAll,
  'create': create,
  'createTag': createTag
};