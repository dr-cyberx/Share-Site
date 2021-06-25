const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  console.log("Get requests in Places!");
  res.json({ message: 'All works fine' })
})

module.exports = router;