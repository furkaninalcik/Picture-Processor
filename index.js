var express = require('express');

var app = express();

app.set('view engine','ejs');


app.get('/',function(req, res){

	res.render('page0');
	
});

app.post('/' , function(req,res){


	console.log('IMAGE POSTED!');



});




app.listen(8080);


