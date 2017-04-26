var JWT = require('jsonwebtoken');

var SuperSecret = 'superSecretKPIT';

module.exports = function(app,express){
    var apiRouter = express.Router();

    // use means Run this on ALL requests
    apiRouter.use('/',function(req,res,next){
        console.log('Running the API');
    });

    //*************************************************************************************** */
    // Following Code to get all Available Users
    //*************************************************************************************** */
    apiRouter.route('/getAllUsers').get(function(req,res){    
        userModel.find(function(err,users){
            if(err) return res.json({
                success : false,
                message : err
            });

            return res.json({
                success : true,
                users : users
            });
        });
    });
    //*************************************************************************************** */
}