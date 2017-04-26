var mongoose = require('mongoose');

var productSchema = mongoose.Schema({

    ProductName : { type: String,require:true},
    Description : {type: String},
    Quantity : {type:Number},
    Price: {type:Number}
})
var productModel = mongoose.model('Product',productSchema);
module.exports = productModel;