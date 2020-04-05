const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  console.log("user finding...");
	const users = await User.find({});

	res.json(users);

});

module.exports = router;