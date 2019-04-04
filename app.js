var express = require('express')
var app = express();
var http = require('http').Server(app);

http.listen(80, function() {
	console.log('Server is listening on port 80');
});

app.use(function(request, response, next) {
	console.log("Server received a request");
	next();
});

app.get('/', function(request, response) {
	response.send("Homepage: Proceed to endpoint /hello");
});

// entering url -->  /hello?name=Victor will display Hello Victor!
app.get('/hello', function(request, response) {
	var name = request.query.name;
	if (!!name)
	{
	response.send("Hello  " + name + "!");
	}
	else
	{
	response.send("Hello stranger!");
	}
});

// entering url --> /hello/...  will produce Hello ...!   ie. try /hello/Alex  --> will give a result of Hello Alex!
app.get('/hello/:name', function(request, response) {
	var name = request.params.name;
	response.send("Hello  " + name +"!");
});

