const User = require('./models/User'); 

exports.writeAsync = async(userId) => {
  return User.create({userid: userId, unit: [{id: 1, name: "unit1"}, {id: 2, name: "unit2"}, {id: 3, name: "unit3"}, {id: 4, name: "unit4"}, {id: 5, name: "unit5"}]});
};