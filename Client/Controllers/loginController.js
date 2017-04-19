app.controller('loginController',function($scope,userService){
    $scope.type = 'create';

    $scope.registerUser = function(){
        $scope.processing = true;

        $scope.message = '';

        console.log($scope.name);
        console.log($scope.email);
        console.log($scope.username);

        var User = {};

        User.name = $scope.name;
        User.email = $scope.email;
        User.username = $scope.username;
        User.password = $scope.password;

        console.log('After User Model' + User);;

        $scope.User = User;

        userService.registerUser($scope.User).then(function(data){
            console.log(data.message);
            $scope.processing = false;

            $scope.name = "";
            $scope.email = "";
            $scope.username = "";
            $scope.password = "";

            $scope.message = data.message;
        });
    }
});