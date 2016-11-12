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
  switch (req.body.type) {
    case 'add':
      result.value = parseInt(req.body.x) + parseInt(req.body.y);
      break;
    case 'minus':
      result.value = parseInt(req.body.x) - parseInt(req.body.y);
      break;
    case 'times':
      result.value = parseInt(req.body.x) * parseInt(req.body.y);
      break;
    case 'divide':
      result.value = parseInt(req.body.x) / parseInt(req.body.y);
      break;
    default:
      console.log('Invalid operator');
  }
}


module.exports = router;
