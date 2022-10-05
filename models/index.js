require('dotenv').config();
const mongoose = require('mongoose');

console.log(process.env);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports.Place = require('./places');
module.exports.Comment = require('./comment');
