var express = require('express');
var multer = require('multer');
var ejs = require('ejs');
var path = require('path');
var bodyParser = require('body-parser')

//Set Storage Engine

const storage = multer.diskStorage({
	destination: './public/uploads/',
	filename: function(req, file,cb){
		cb(null, file.fieldname + '-' + Date.now() +
		path.extname(file.originalname));

	}
});


const upload = multer({
	storage: storage
}).single('myImage'); 

var app = express();

app.set('view engine','ejs');

app.use(express.static('./public'));


app.get('/',function(req, res){

	res.render('page0');
	
});

app.post('/upload' , function(req,res){

	upload(req,res, function(err){
		if (err) {
			res.render('page0' , {
				msg:err
			});
		} else{
			console.log(req.file);
			//res.send('TEST!!');
		}

	});



});




app.listen(8080);


