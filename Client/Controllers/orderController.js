productApp.controller("orderController",["$scope","$rootScope","productService",function($scope,$rootScope,productService){

    $scope.orders=[];

    $scope.delete=function(orderId){
        productService.delete('http://localhost:9090/deleteOrder/', orderId)
        .then(function(success){
            $scope.orders = success.data;
        },
        function(error){

        })
        
    }

    $scope.viewOrders = function(){
        productService.get('http://localhost:9090/viewOrders/' + $rootScope.loggedUserName).then(function (success){
            $scope.orders = success.data;
        },function (error){

        });
    }
}])