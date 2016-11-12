var express = require('express');
var router = express.Router();

var result = {};

router.post('/', function(req, res) {
  calculator(req);
  res.sendStatus(201);
});

router.get('/', function(req, res) {
  res.send(result);
});

function calculator(req) {
  result.value = parseInt(req.body.x) + parseInt(req.body.y);
}


module.exports = router;
