
//*************************************************************************************** */
// Rigester a New User
//*************************************************************************************** */
productApp.controller('registerUserController',function($scope,$routeParams,userService){
    if($routeParams.userID == undefined){
        $scope.type = 'create';

        $scope.registerUser = function(){
            $scope.processing = true;
            $scope.message = "";

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
    }
    else{
        $scope.type = 'edit';

        userService.getUserByID($routeParams.userID).then(function(data){
            if(data.data.success){
                $scope.name = data.data.user.name;
                $scope.email = data.data.user.email;
                $scope.username = data.data.user.username;
                $scope.password = data.data.user.password;
            }
            else{
                $scope.message = data.data.message;
            }
        });

        $scope.registerUser = function(){
            $scope.processing = true;
            $scope.message = "";

            var User = {};
            User.name = $scope.name;
            User.email = $scope.email;
            User.username = $scope.username;
            User.password = $scope.password;

            $scope.User = User;

            userService.updateUser($routeParams.userID,$scope.User).then(function(data){
                if(data.data.success){
                    $scope.message = data.data.message;
                }
                else{
                    $scope.message = data.data.message;
                }
            });
        }
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
    $scope.message = "";

    userService.getAllUsers().then(function(data){
        if(data.data.success){
            $scope.users = data.data.users;
        }
        else{
            $scope.success = data.data.success;
            $scope.message = data.data.message;
        }
        $scope.processiong = false;
    });

    // Following code to delete the User by ID
    $scope.deleteUser = function(user){
        userService.deleteUser(user._id).then(function(data){
            if(data.data.success){
                $scope.success = data.data.success;
                $scope.message = data.data.message;
                userService.getAllUsers().then(function(userData){
                    if(userData.data.success){
                        $scope.success = userData.data.success;
                        $scope.users = userData.data.users;
                    }
                    else{
                        $scope.success = userData.data.success;
                        $scope.message = userData.data.message;
                    }                    
                });
            }
            else{
                $scope.success = data.data.success;
                $scope.message = data.data.message;
            }
            $scope.processiong = false;
        });
    }
});
//*************************************************************************************** */