const User = require('./models/User'); 

exports.readAsync = async(userId) => {
  return User.findOne({userid: userId}).exec();
};