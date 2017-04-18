app.controller('loginController',function($scope){
    $scope.type = 'create';

    $scope.registerUser = function(){
        $scope.processing = true;

        $scope.message = '';

        console.log($scope.name);
        console.log($scope.email);
        console.log($scope.username);
    }
});