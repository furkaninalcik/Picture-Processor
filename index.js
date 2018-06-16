var express = require('express');

var bodyParser = require('body-parser')

var app = express();

app.set('view engine','ejs');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 




app.get('/',function(req, res){

	res.render('page0');
	
});

app.post('/' , function(req,res){


	console.log('IMAGE POSTED!');



});




app.listen(8080);


