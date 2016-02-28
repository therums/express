var express = require('express');
var app = express();
// var ejs = require('ejs'),

// couldn't get this page to work
// app.get('/', function(req, res) {
// 	res.render('dogs.ejs')
// })

// order of routes matter
// '/' => hi there
app.get('/', function(req, res) {
	res.send('Hello world!')
})
// '/goodbye' => goodbye
app.get('/goodbye', function(req, res) {
	res.send('Goodbye')
})
// '/cat' => cat
app.get('/cat', function(req, res) {
	res.send('cat!')
})

app.get('/fallinlovewith/:thing', function(req, res) {
	var thing = req.params.thing;
	res.send("You fell in Love with " + thing)
})


app.get("*", function(req, res) {
	res.send("You are lost")
})

// telling express to listen
var server = app.listen(3000, function() {
	console.log('Server running at http://localhost: ', + server.address().port)
})