
//*************************************************************************************** */
// Rigester a New User
//*************************************************************************************** */
productApp.controller('registerUserController',function($scope,userService){
    $scope.type = 'create';

    $scope.registerUser = function(){
        $scope.processing = true;

        $scope.message = '';

        var User = {};
        User.name = $scope.name;
        User.email = $scope.email;
        User.username = $scope.username;
        User.password = $scope.password;

        $scope.User = User;

        userService.registerUser($scope.User).then(function(data){
            $scope.processing = false;

            $scope.name = "";
            $scope.email = "";
            $scope.username = "";
            $scope.password = "";

            $scope.message = data.data.message;
        });
    }
});
//*************************************************************************************** */

//*************************************************************************************** */
// Login 
//*************************************************************************************** */
productApp.controller('loginUserController',function($rootScope,$scope,$location,authService){
    $scope.error = "";

    $scope.userLogin = function(){
        authService.login($scope.username,$scope.password).then(function(data){
            if(data.data.success)
            {
                $rootScope.loggedUserName = 'Welcome ' + data.data.username;
                $rootScope.isLogedIn = data.data.success;
                $location.path('/users');
            }
            else{
                $scope.error = data.data.message;
            }
        });
    }

    $scope.logout = function(){
        authService.logout();
        $rootScope.loggedUserName = "";
        $rootScope.isLogedIn = false;
        $location.path('/login');
    }
});
//*************************************************************************************** */

//*************************************************************************************** */
// Login 
//*************************************************************************************** */
productApp.controller('getUsersController',function($scope,userService){
    $scope.processiong = true;

    userService.getAllUsers().then(function(data){
        if(data.data.success){
            $scope.success = data.data.success;
            $scope.users = data.data.users;
        }
        else{
            $scope.success = data.data.success;
            $scope.message = data.data.message;
        }
        $scope.processiong = false;
    });

    $scope.deleteUser = function(user){
        console.log(user._id);
        userService.deleteUser(user._id).then(function(data){
            console.log(data.data.message);
        });
    }
});
//*************************************************************************************** */