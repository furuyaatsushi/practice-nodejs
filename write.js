const mongoose = require('mongoose');
const Promise = require('bluebird');
mongoose.Promise = Promise;

const user = require('./models/User'); 

let tom = new user({ name: 'Tom', age: 20 }),
    mary = new user({ name: 'Mary', age: 27 });
let person = [tom, mary];
function insert(user) {
  return Promise.resolve(() => user.save())
    .then(() => {
      console.log(user.name + ' is saved');
      console.log(user.isOld() ? 'old' : 'not old');
    })
    .catch(err => console.error(err));
}

const options = {
	useUnifiedTopology : true,
	useNewUrlParser : true
}

mongoose.connect('mongodb://127.0.0.1/test_db2', options);
let db = mongoose.connection;

Promise.resolve(() => db.once('open'))
  .then(() => console.log('connection opened'))
  .then(Promise.all(person.map(user => insert(user))))
  .then(() => console.log('records inserted'))
  .then(() => db.close())
  .then(() => console.log('connection closed'));