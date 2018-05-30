const { server } = require('./index');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
mongoose.Promise = global.Promise;
// const uri = 'mongodb://heroku_m7f5h0h6:pk20t1sracjbphn4kiteubek8u@ds137740.mlab.com:37740/heroku_m7f5h0h6';
const uri = `mongodb://abramapi:AbNewDatabaseTest@ds237770.mlab.com:37770/notesdb`
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
