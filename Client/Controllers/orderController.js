productApp.controller("orderController",["$scope","$rootScope","productService","toastr",function($scope,$rootScope,productService,toastr){

    $scope.orders=[];

    $scope.delete=function(orderId){
        var answer = confirm("Do you want to remove this product");
        if(answer==true){
            productService.delete('http://localhost:9090/deleteCartItem/', orderId)
            .then(function(success){
                $scope.orders = success.data;
                toastr.success('The Product is delete from the Cart Successfully');
            },
            function(error){
                toastr.error('There was some problem.Please try again later');
            });
        }
        
    }

    $scope.viewOrders = function(){
        productService.get('http://localhost:9090/viewCart/' + $rootScope.loggedUserName).then(function (success){
            $scope.orders = success.data;
        },function (error){

        });
    }

    $scope.confirmOrder = function(){
        productService.post('http://localhost:9090/confirmOrder/' + $rootScope.loggedUserName).
        then(function(response){
            
        },function(error){

        })
    }
}])