productApp.service('authService',function($http,$q,$window,AuthToken){

    this.login = function(username,password){
        return $http.post('/authenticate/',{
            username : username,
            password : password
        }).then(function(data){
            AuthToken.setToken(data);
            return data;
        });
    }

    this.logout = function(){
        AuthToken.setToken();
    }

})

.factory('AuthToken',function($window){
    var authTokenFactory = {};

    authTokenFactory.setToken = function(data){
        if(data){
            $window.localStorage.setItem('token',data.data.token);
        }
        else{
            $window.localStorage.removeItem('token');
        }
    }

    authTokenFactory.getToken = function(){
        var token = $window.localStorage.getItem('token');
        if(token != undefined){
            return token;
        }
        else{
            return null;
        }
    }

    return authTokenFactory;
})

.factory('AuthInterceptor', function($q,$location,AuthToken)	{
	var interceptorFactory = {};

	//	 this will hapen on all HTTP requests
	interceptorFactory.request = function(config)	{
		//	grab the token
		var token = AuthToken.getToken();
        
		//if the token exists, add it to the header as x-access-token
		if(token)
			config.headers['x-access-token'] = token;

		return config;
	};

	//	happens on response errors
	interceptorFactory.responseError = function(response)	{
		//	if our server returns a 403 forbidden response
		if(response.status == 403)
			$location.path('/login');
		//return the errors from the server as a promise
		return $q.reject(response);
	};

	return interceptorFactory;
});