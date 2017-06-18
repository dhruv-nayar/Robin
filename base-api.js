var http = require('http');
var express = require('express');

var app = express();
var sys = require('sys');
var execFile = require('child_process').execFile;
var child;

runUpgrade = execFile('upgrade/upgrade-robin.txt', function(error,stdout,stderr){
console.log(stdout);	
if (error != null){
		console.log('exec error: '+error);
	}
});



app.use(express['static'](__dirname ));


// Express route for upgrade request
app.get('/upgrade', function(req, res) {
  res.status(200).send('Upgrade Initiated');
	console.log('Upgraded');
	runUpgrade;
}); 

// Express route for any other unrecognised incoming requests
app.get('*', function(req, res) {
  res.status(404).send('Unrecognised API call');
});

// Express route to handle errors
app.use(function(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send('Oops, Something went wrong!');
  } else {
    next(err);
  }
});



app.listen(4000);
console.log('App Server running at port 4000');
