var mongoose = require('mongoose');

var userSchema = mongoose.Schema({

    name : 
    {  
        type: String,
        require:true
    },
    email : 
    {
        type: String
    },
    username : 
    {
        type:String,
        required : true,
        index:{	unique:true	}
    },
    password: 
    {
        type : String,
        required : true
    }
});

var userModel = mongoose.model('User',userSchema);
module.exports = userModel;