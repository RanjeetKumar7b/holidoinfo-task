const express = require('express')
const con=require('./db')
// const fching=require('./store');
const datas_routed=require('./routes/data_route');
const app = express()
app.use(express.json());
app.use('/getall',datas_routed);
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(5700)