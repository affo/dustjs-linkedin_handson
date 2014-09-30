var express = require('express');

var app = express();

app.use(express.static('.'));

var server = app.listen(3000, function(){
	console.log('Listening on %d', server.address().port);
});