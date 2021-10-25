const express = require('express');
const router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.send(path.join(__dirname, 'public'));
  res.render(path.join(__dirname + '/public'))
});


module.exports = router;
