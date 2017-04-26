var mongoose = require('mongoose');

var UserOrderSchema = mongoose.Schema({
    
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

module.exports = mongoose.model('userOrder',UserOrderSchema);