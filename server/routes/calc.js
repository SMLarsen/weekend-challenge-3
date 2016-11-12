var express = require('express');
var router = express.Router();

var result = {};

router.post('/add', function(req, res) {
  console.log('post /add');
  result.value = parseInt(req.body.x) + parseInt(req.body.y);
  res.sendStatus(201);
});

router.post('/minus', function(req, res) {
  console.log('post /minus');
  result.value = parseInt(req.body.x) - parseInt(req.body.y);
  res.sendStatus(201);
});

router.post('/times', function(req, res) {
  console.log('post /times');
  result.value = parseInt(req.body.x) * parseInt(req.body.y);
  res.sendStatus(201);
});

router.post('/divide', function(req, res) {
  console.log('post /divide');
  result.value = parseInt(req.body.x) / parseInt(req.body.y);
  res.sendStatus(201);
});

router.get('/', function(req, res) {
  console.log('get /');
  res.send(result);
});

module.exports = router;
