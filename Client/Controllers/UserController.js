
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
productApp.controller('loginUserController',function($scope,authService){
    $scope.processiong = true;
    $scope.error = "";

    console.log($scope.username);
    console.log($scope.password);

    $scope.userLogin = function(){
        authService.login($scope.username,$scope.password).then(function(data){
            console.log(data.data.success);
            console.log(data.data.message);
            if(data.data.success)
            {
                $location.path('/users');
            }
        });
    }
});
//*************************************************************************************** */