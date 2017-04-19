var http = require('http');
var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended:false});
var app = express();
var productModel = require(__dirname + '/Server/Schemas/productSchema.js') ;

app.use(express.static('Client'));

app.use(bodyParser.json());

app.use(function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers","X-Requested-With,content-type");
    res.setHeader("Access-Control-Allow-Credentials",true);
    next();
});

app.get('/',function(req,res){
    res.sendFile(__dirname + '/Client/Views/index.htm');
})

app.post('/post',urlEncodedParser,function(req,res){

});

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/Client/Views/index.htm');
});

mongoose.connect('mongodb://SMD-0860:27017/kCart');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('MONGO: successfully connected to db');
});



var server = app.listen(9090, function(){
     var host = server.address().address;
    var port= server.address().port;

    console.log("Example app is listening at http://%s:%s", host,port);
});