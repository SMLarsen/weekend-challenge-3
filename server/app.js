var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

// routing modules
var index = require('./routes/index');

app.use(bodyParser.urlencoded({
    extended: true
}));

// routes
// app.use('/bios', bios);
// app.use('/likes', bios);

// static files
app.use('/', index);

// Set port to listen to
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
    console.log("Server is listening on port: " + app.get('port'));
});
