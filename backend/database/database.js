
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/ecosavy', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error:', err));
  
//insert data into mongodb
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    //we are connected
    console.log('we are connected');
});

module.exports = db;