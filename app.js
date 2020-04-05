const express = require('express');
const app = express();
const mongoose = require('mongoose');

const User = require('./models/User');

const port = 3000;

const options = { 
  useUnifiedTopology : true,
  useNewUrlParser : true
}

mongoose.connect('mongodb://127.0.0.1/UserData',options);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', () => console.log('DB connection successful'));

app.get('/user', async (req, res) => {

	const users = await User.find({});

	res.json(users);

});