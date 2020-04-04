/* 1. expressモジュールをロードし、インスタンス化してappに代入。*/
const express = require("express");
const app = express();

/* 2. listen()メソッドを実行して3000番ポートで待ち受け。*/
const server = app.listen(3000, function(){
  console.log("Node.js is listening to PORT:" + server.address().port);
});

app.get('/', (req, res) => res.send('Hello World!'));