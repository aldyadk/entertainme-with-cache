const app = require('express')();
const axios = require('axios');
const responseTime = require('response-time');
const redis = require('redis');

var client = redis.createClient()
var axiosMovies = ()=> axios.get('http://localhost:3001/movie/')
var axiosTv = ()=> axios.get('http://localhost:3002/tv/')
var obj = {}

app.use(responseTime())

// app.use('/entertainme',async(req,res)=>{
//   try {
//     const movies = await axiosMovies()
//     const series = await axiosTv()
//
//     obj.movies = movies.data
//     obj.series = series.data
//
//     res.send(obj)
//
//   } catch (err) {
//     console.error(err)
//   }
// })

app.use('/:anything',async(req,res)=>{
  const movies = await axiosMovies()
  const series = await axiosTv()
  client.get(req.params.anything,(err,result)=>{
    if(result){
      res.send({
        source:'cache',
        result:JSON.parse(result),
      })
    } else {
      try {
        obj.movies = movies.data
        obj.series = series.data
        client.setex(req.params.anything, 2, JSON.stringify(obj))
        res.send({
          source:'api',
          result:obj,
        })
      } catch (err) {
        console.error(err)
      }
    }
  })
})

app.listen(3000,()=>{
  console.log('server 1.orkestrator running cuy')
})