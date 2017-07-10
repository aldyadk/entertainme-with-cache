const app = require('express')();
const bodyParser = require('body-parser');

const movie = require('./routes/movie');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use('/movie', movie)

app.listen(3001,()=>{
  console.log('server 2.movie running cuy')
})