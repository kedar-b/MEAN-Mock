var mongoose = require('mongoose');

var UserOrderScehma = mongoose.Schema({
    
    UserName : {type : String,require : true},
    Product : [ 
                {ProductName : { type : String , require : true} },
                {ProductQuantity : { type : Number , require : true}},
                {ProductPrice : { type : Number,require : true }},
                {SubTotal : { type : Number}} 
              ],
    GrandTotal : {type : Number}
    

})

module.exports = mongoose.model('userOrder',UserOrderScehma);