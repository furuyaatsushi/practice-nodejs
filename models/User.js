const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  userid: String,
  unit: Array
});

module.exports = mongoose.model('User',UserSchema);