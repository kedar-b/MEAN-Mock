app.controller('productCont'["$scope","$http",function($scope,$http){

    $scope.products = [{ProductName : 'Nokia',Description : 'Best Phone',Price : 2000},
                        {ProductName : 'Samsung',Description : 'Bad Phone',Price : 1000},
                        {ProductName : 'IPhone',Description : 'Better Phone',Price : 1500}];

}])