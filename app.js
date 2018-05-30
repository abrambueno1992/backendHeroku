const { server } = require('./index');
const mongoose = require('mongoose');
const port = process.env.PORT || 3333;
mongoose.Promise = global.Promise;
require('dotenv').config();
const dotENV = require('dotenv').config();
const uri = `${process.env.DB_MONGOdb}`;

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

mongoose.connect(uri);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
