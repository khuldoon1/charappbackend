const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
app.use(cors())
const db = require('./queries')
const port = 3000;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })
  app.get('/users', db.getdata);
  app.get('/eth', db.getdataeth);
  app.get("/xpr",db.getdataxpr);
  app.get("/financials",db.financials);
  app.get("/crypto_meter",db.crypto_meter)
  app.get('/btcnew', db.getlatestbtcdata);
  app.get('/ethnew', db.getlatestethdata);
  app.get("/xprnew",db.getlatestxrpdata);
  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })