const express = require('express');
const read = require('../read');
const write = require('../write');
const router = express.Router();

router.get('/', async (req, res) => {

	const users = await User.find({});

	res.json(users);

});

router.post('/login', async (req,res)=>{
  const userId = req.body.userId;
  let user = await read.readAsync(userId);
  if(!user){
    await write.writeAsync(userId);
    user = await read.readAsync(userId);
  }
  return res.json(user);
});

module.exports = router;