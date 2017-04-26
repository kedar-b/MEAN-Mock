var mongoose = require('mongoose');

var UserCartScehma = mongoose.Schema({
    
    UserName : {type : String,require : true},
    Products : [    {
                    Name : { type : String , require : true},
                    Quantity : { type : Number , require : true},
                    Price : { type : Number,require : true },
                    SubTotal : { type : Number} }
                ],
    GrandTotal : {type : Number},
    AddedDate : {type : Date}
})

module.exports = mongoose.model('userCart',UserCartScehma);