const express = require('express');
const read = require('../read');
const write = require('../write');
const router = express.Router();

router.get('/unit/get', async (req, res) => {
  const userId = req.query.userid;
	const user = await read.readAsync(userId);

	res.json(user.unit);

});

router.post('/login', async (req,res)=>{
  console.log(req.body.userId);
  const userId = req.body.userId;
  let user = await read.readAsync(userId);
  if(!user){
    await write.writeAsync(userId);
    user = await read.readAsync(userId);
  }
  return res.json(user);
});

module.exports = router;