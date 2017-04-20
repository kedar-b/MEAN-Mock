productApp.service('userService',function($http){

    this.registerUser = function(User){
        return $http.post('/registerUser/',User).then(function(data){
            return data;
        });
    }

    this.getAllUsers = function(){
        return $http.get('/getAllUsers/').then(function(data){
            return data;
        });
    }

    this.deleteUser = function(userID){
        console.log(userID);
        return $http.delete('/deleteUser/' + userID).then(function(data){
            console.log(data.data.message);
            return data;
        })
    }

});

// app.factory('userService',function($http){
//     var userFactory = {};
//     userFactory.registerUser = function(User){
//         return $http.post('/registerUser/',User);
//     }
//     return userFactory;
// });