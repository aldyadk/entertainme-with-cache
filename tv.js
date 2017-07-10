const app = require('express')();
const bodyParser = require('body-parser');

const tv = require('./routes/tv');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use('/tv', tv)

app.listen(3002,()=>{
  console.log('server 3.tv running cuy')
})