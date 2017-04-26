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
        return $http.delete('/deleteUser/' + userID).then(function(data){
            return data;
        })
    }

    this.updateUser = function(userID,User){
        return $http.put('/updateUser/' + userID, User).then(function(data){
            return data;
        });
    }

    this.getUserByID = function(userID){
        return $http.get('/getUserByID/' + userID).then(function(data){
            return data;
        });
    }

});