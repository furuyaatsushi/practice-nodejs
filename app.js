const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./routes/user');

app.use('/user', userRouter);

const User = require('./models/User');

const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const options = { 
  useUnifiedTopology : true,
  useNewUrlParser : true
}

mongoose.connect('mongodb://127.0.0.1/UserData',options);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', () => console.log('DB connection successful'));