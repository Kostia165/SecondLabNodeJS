// index.js
var express = require('express');
var app = express();

app.route('/').get(function (req, res){
	res.send('Hello World!');
});

app.listen(3000, function(){
	console.log('Приклад застосунку, який прослуховує 3000-ий порт!');
});

