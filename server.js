var http = require('http');
var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended:false});
var app = express();
var productModel = require(__dirname + '/Server/Schemas/productSchema.js') ;
var userModel = require(__dirname + '/Server/Schemas/user.js') ;

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

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://SMD-0860:27017/kCart');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('MONGO: successfully connected to db');
});

app.post('/post',urlEncodedParser,function(req,res){

});

//*************************************************************************************** */
// Following Code to Register a new User
//*************************************************************************************** */
app.route('/registerUser').post(function(req,res){
    var user = new userModel({
        name : req.body.name,
        email : req.body.email,
        username : req.body.username,
        password : req.body.password
    });

    user.save(function(err){
        if(err) return res.json({
            //success : false,
            message : 'Could not create the User'
        });
        return res.json({
            //success : true,
            message : 'User Created Successfully'
        });
    });
});
//*************************************************************************************** */

var server = app.listen(9090, function(){
     var host = server.address().address;
    var port= server.address().port;

    console.log("Example app is listening at http://%s:%s", host,port);
});