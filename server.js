var http = require('http');
var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended:false});
var app = express();
var productModel = require(__dirname + '/Server/Schemas/productSchema.js') ;
var userModel = require(__dirname + '/Server/Schemas/user.js') ;
var orderModel = require(__dirname + '/Server/Schemas/productSchema.js');

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

app.post('/post',urlEncodedParser,function(req,res){
    console.log(req.body);
    //db.create(req.body);
});

app.post('/addOrder',urlEncodedParser,function(req,res){
    console.log(req.body);
    orderModel.create(req.body);
    res.send("Successfully");
});

//*************************************************************************************** */
// Following Code to Authenticate a new User
//*************************************************************************************** */
app.route('/authenticate').post(function(req,res){
    console.log('SERVER.JS authentication');
    console.log(req.body.username);
    console.log(req.body.password);

    userModel.findOne({
        username : req.body.username,
        password : req.body.password
    },function(err,user){
        if(err) return res.json({
				success : false,
				message : err
			});

        if(!user)
        {
            console.log('USER NOT FOUND');
            res.json({
				success : false,
				message : 'Authencation failed. User not found.'
			});
        }
        else{
            console.log('USER FOUND');
            return res.json({
				success : true,
				message : "User Authenticated Successfully",
                username : user.username
			});
        }
    })
});
//*************************************************************************************** */

//*************************************************************************************** */
// Following Code to Register a new User
//*************************************************************************************** */
app.route('/registerUser').post(function(req,res){
    console.log(req.body);
    
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

app.post('/addProduct', urlEncodedParser,  function(req,res){
    
    //console.log(req.body);
    productModel.create(req.body);
    //userModel
});

app.put('/updateProduct', function(req, res){
	console.log("Product updated Successfully");
});
app.delete('/deleteProduct/:id', function(req, res){
	console.log("Product Deleted Successfully");
});

app.get('/getProducts',(req,res)=>{
productModel.find( function(error,users){
        return res.send(users);
    })
});
var server = app.listen(9090, function(){
     var host = server.address().address;
    var port= server.address().port;

    console.log("Example app is listening at http://%s:%s", host,port);
});