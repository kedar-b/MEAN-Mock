productApp.controller('productController',["$scope","productService","$http","toastr",function($scope,productService,$http,toastr){
$scope.product ={};
$scope.products=[];
    $scope.addToCart = function(order){
        
        order.UserName = "Rohan";
        productService.post("http://localhost:9090/addOrder",order)
        .then(function(response){
            toastr.success(order.ProductName + ' added successfully', 'Order');    
        },
        function(error){
            toastr.error('Something went Wrong');
        });
    }
   $scope.addProducts = function(){
        productService.post('http://localhost:9090/addProduct',$scope.product).then(function (success){
            $scope.products = success.data;
        },function (error){

        });
    }
    $scope.getProducts = function(){
        productService.get('http://localhost:9090/getProducts').then(function (success){
            $scope.products = success.data;

        },function (error){

        });
    }

    $scope.updateProducts = function(){
        productService.put('http://localhost:9090/',$scope.products.ID).then(function (success){
            $scope.products = success.data;
            //Comment by KEdar
        });

    }

}]);


