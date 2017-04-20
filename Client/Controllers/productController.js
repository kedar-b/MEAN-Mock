productApp.controller('productController',["$scope","productService","toastr",function($scope,productService,toastr){

    $scope.products={};
    $scope.products = [{ProductName : 'Nokia',Description : 'Best Phone',Price : 2000},
                        {ProductName : 'Samsung',Description : 'Bad Phone',Price : 1000},
                        {ProductName : 'IPhone',Description : 'Better Phone',Price : 1500}];
    


    $scope.addToCart = function(order){
        
        order.UserName = "Rohan";
        order.AddedDate = new Date();
        productService.post("http://localhost:9090/addOrder",order)
        .then(function(response){
            toastr.success(order.ProductName + ' added successfully', 'Order');    
        },
        function(error){
            toastr.error('Something went Wrong');
        });
    }
   $scope.addProducts = function(){
        productService.post('http://localhost:9090/addProduct',$scope.products).then(function (success){
            $scope.products = success.data;
        },function (error){

        });
    }
    $scope.getProducts = function(){
        productService.get('http://localhost:9090/').then(function (success){
            $scope.products = success.data;

        },function (error){

        });
    }

    $scope.updateProducts = function(){
        productService.put('http://localhost:9090/',$scope.products.ID).then(function (success){
            $scope.products = success.data;
        });

    }

}]);


