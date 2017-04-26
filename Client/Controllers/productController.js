productApp.controller('productController',["$scope","$rootScope", "productService","toastr",function($scope,$rootScope,productService,toastr){
$scope.product ={};
$scope.products ={};
$scope.selected;

    // $scope.products = [{ProductName : 'Nokia',Description : 'Best Phone',Price : 2000},
    //                     {ProductName : 'Samsung',Description : 'Bad Phone',Price : 1000},
    //                     {ProductName : 'IPhone',Description : 'Better Phone',Price : 1500}];
    

    $scope.addToCart = function(order){
        
        order.UserName = $rootScope.loggedUserName;
        productService.post("http://localhost:9090/addToCart",order)
        .then(function(response){
            toastr.success(order.ProductName + ' added successfully', 'Order');    
        },
        function(error){
            toastr.error('Something went Wrong');
        });
    }
   $scope.addProducts = function(){
        productService.post('http://localhost:9090/addProduct',$scope.product)
        .then(function (success){
             toastr.success($scope.product.ProductName + ' added successfully', 'product'); 
            $scope.getProducts();
           $scope.product = {};
            //getProducts();
        },function (error){
            console.log(error);
        });
    }
    $scope.getProducts = function(){
        productService.get('http://localhost:9090/getProduct').then(function (success){
            $scope.products = success.data;
            console.log("product added");

        },function (error){

        });
    }

    $scope.updateProduct = function(product){
        productService.put('http://localhost:9090/updateProduct',product).then(function (success){
            $scope.products = success.data;
            toastr.success($scope.selected.ProductName + ' updated successfully', 'product');
            $scope.reset();
            $scope.getProducts();
            //Comment by KEdar
        });

    }
    $scope.deleteproduct = function(product){
     productService.delete('http://localhost:9090/deleteproduct',product).then(function (success){
            $scope.products = success.data;
            toastr.success($scope.selected.ProductName + ' deleted successfully', 'product');
            $scope.reset();
            $scope.getProducts();
            //Comment by KEdar
        });
    }

    $scope.getTemplate = function (product) {  
    if(!($scope.selected == undefined)){
    if (product._id === $scope.selected._id){  
        return 'edit';  
    }  
    else return 'display';  
    }else{
        return 'display';
    }
};

$scope.editProduct = function (product) {  
    $scope.selected = angular.copy(product);  
};

$scope.reset = function () {
$scope.selected = {};
};

}]);


