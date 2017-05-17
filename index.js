var express = require('express');
var request = require('request'); 
var app = express();

app.get('/api/vehicle/info/vin/:vin', function (req, res) {
	var edmundsUrl = 'https://api.edmunds.com/api/vehicle/v2/vins/' + req.params.vin + '?fmt=json&api_key=' + process.env.EDMUNDS_API_KEY; 
  	request(edmundsUrl, function(error, response, body){
  		if(!error && response.statusCode == 200) {
  			res.send(JSON.parse(body).make.name); 
  			
  		}
  	}); 
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
});