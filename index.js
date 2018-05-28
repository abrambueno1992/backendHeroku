const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');

const PORT = process.env.PORT || 5000
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const server = express();
const uri = 'mongodb://heroku_m7f5h0h6:pk20t1sracjbphn4kiteubek8u@ds137740.mlab.com:37740/heroku_m7f5h0h6';

var options = {
  "server": {
    "socketOptions": {
      "keepAlive": 300000,
      "connectTimeoutMS": 30000
    }
  },
  "replset": {
    "socketOptions": {
      "keepAlive": 300000,
      "connectTimeoutMS": 30000
    }
  }
}

mongoose.connect(uri, options);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

server.use(helmet());
server.unsubscribe(cors());
server.use(express.json());

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/test', function (req, res) {
    res.status(200).json({ api: 'running' });
  })
  .get('/cool', (req, res) => res.send(cool()))
  .get('/times', (req, res) => {
    let result = ''
    const times = process.env.TIMES || 5
    for (i = 0; i < times; i++) {
      result += i + ' '
    }
    res.send(result)
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
  module.exports = {
    server
};