var express = require('express');
var router = express.Router();

var result = {};

router.post('/add', function(req, res) {
  result.value = parseInt(req.body.x) + parseInt(req.body.y);
  res.sendStatus(201);
});

router.get('/add', function(req, res) {
  res.send(result);
});


module.exports = router;
