const mongoose = require('mongoose');

function db() {
  const uri = 'mongodb://localhost:27017/users';

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose.connect(uri, options);
  const { connection } = mongoose;
  connection.once('open', () => console.log('Connection established successfully'));
  connection.on('error', err => console.log('Something went wrong!', err));
}

module.exports = db;
