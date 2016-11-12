var express = require('express');
var router = express.Router();

var result = {};

router.post('/add', function(req, res) {
  console.log('post /add');
  result.value = parseFloat(req.body.x) + parseFloat(req.body.y);
  res.sendStatus(201);
});

router.post('/minus', function(req, res) {
  console.log('post /minus');
  result.value = parseFloat(req.body.x) - parseFloat(req.body.y);
  res.sendStatus(201);
});

router.post('/times', function(req, res) {
  console.log('post /times');
  result.value = parseFloat(req.body.x) * parseFloat(req.body.y);
  res.sendStatus(201);
});

router.post('/divide', function(req, res) {
  console.log('post /divide');
  result.value = parseFloat(req.body.x) / parseFloat(req.body.y);
  res.sendStatus(201);
});

router.get('/', function(req, res) {
  console.log('get /');
  res.send(result);
});

module.exports = router;
