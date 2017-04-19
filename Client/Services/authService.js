productApp.service('authService',function($http){

    this.login = function(username,password){
        return $http.post('/authenticate/',{
            username : username,
            password : password
        }).then(function(data){
            console.log('From service ' + data.message);
            return data;
        });
    }

});

// productApp.factory('authService',function($http){

//     var authFactory = {};
    
//     authFactory.login = function(username,password){
//         return $http.post('/authenticate/',{
//             username : username,
//             password : password
//         }).then(function(data){
//             console.log('From service ' + data.message);
//             return data;
//         });
//     }

//     return authFactory;
// });