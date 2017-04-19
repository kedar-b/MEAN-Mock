
//*************************************************************************************** */
// Rigester a New User
//*************************************************************************************** */
app.controller('registerUserController',function($scope,userService){
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

            $scope.message = data.message;
        });
    }
});
//*************************************************************************************** */

//*************************************************************************************** */
// Login 
//*************************************************************************************** */
app.controller('loginUserController',function($scope,userService){
});
//*************************************************************************************** */