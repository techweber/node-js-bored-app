var express = require('express');
var app = express();
var app_port = 3000;

//Starting our web server

app.listen(app_port, function(){
	console.log('Node js web server running at port ' + app_port);
});

// Define the landing page route

app.get('/',function(req,res){

    const fetch = require('node-fetch');

	// api to hit

	fetch('https://www.boredapi.com/api/activity?type=recreational')
		.then(res => res.json())
		.then(json => res.send(`<h1>Activity : ${json.activity}</h1>
								<h2>Type : ${json.type} </h2>
								<h2>No. of Participants : ${json.participants}</h2>
								<h2>Price : ${json.price}</h2>`));
});