var express = require('express');
var router = express.Router();

router.post('/add', function(req, res) {
    console.log(req.body.x, req.body.y);
    res.send(req.body.x + req.body.y);
    console.log('Success: post /calc');
});


module.exports = router;
