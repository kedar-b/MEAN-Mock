productApp.service('authService',function($http){

    this.login = function(username,password){
        return $http.post('/authenticate/',{
            username : username,
            password : password
        }).then(function(data){
            return data;
        });
    }

    this.logout = function(){
        
    }

});