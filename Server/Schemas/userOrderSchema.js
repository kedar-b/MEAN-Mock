var mongoose = require('mongoose');

var UserOrderScehma = mongoose.Schema({
    
    UserName : {type : String,require : true},
    ProductName : { type : String , require : true},
    ProductQuantity : { type : Number , require : true},
    ProductPrice : { type : Number,require : true },
    SubTotal : { type : Number},
    GrandTotal : {type : Number},
    AddedDate : {type : Date}
})

module.exports = mongoose.model('userOrder',UserOrderScehma);