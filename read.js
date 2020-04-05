const mongoose = require('mongoose');
const Promise = require('bluebird');
mongoose.Promise = Promise;

const user = require('./models/User'); 

const options = {
	useUnifiedTopology : true,
	useNewUrlParser : true
}

mongoose.connect('mongodb://127.0.0.1/test_db2', options);
let db = mongoose.connection;
Promise.resolve(() => db.once('open'))
  .then(() => {
    console.log('connection opened');
    return user.User.find({});
  })
  .then(users => {
    console.log('records fetched');
    users.forEach(user => console.log(user.name));
  })
  .then(() => db.close())
  .then(() => console.log('connection closed'));