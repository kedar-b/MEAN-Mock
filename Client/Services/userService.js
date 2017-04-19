app.service('userService',function($http){

    this.registerUser = function(User){
        return $http.post('/registerUser/',User);
    }

});

// app.factory('userService',function($http){
//     var userFactory = {};
//     userFactory.registerUser = function(User){
//         return $http.post('/registerUser/',User);
//     }
//     return userFactory;
// });