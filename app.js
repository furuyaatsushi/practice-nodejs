const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./routes/user')

const User = require('./models/User'); 

const port = 3000;

const options = {
  useUnifiedTopology : true,
  useNewUrlParser : true
};

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type,Accept,Authorization');
  next();
});

app.use('/', userRouter);

mongoose.connect('mongodb://127.0.0.1/UserCollection', options);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Databsse connection successful'));
app.listen(port,
  () => console.log('Example app listening on port ${port}!'));