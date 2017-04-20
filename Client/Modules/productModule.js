var productApp = angular.module('productApp',["ngRoute","toastr"]);

productApp.config(function($routeProvider,$locationProvider){
    // $routeProvider.when('/',
    // {
    //     templateUrl : "Views/index.htm"
    // })
    $routeProvider.when('/login',
    {
        templateUrl : "Views/UserManagement/login.htm",
        controller : "loginUserController"
    })
    .when('/register',
    {
        templateUrl : "Views/UserManagement/register.htm",
        controller : "registerUserController"
    })
    .when('/users',
    {
        templateUrl : "Views/UserManagement/users.htm",
        controller : "getUsersController"
    })
    .when('/viewproduct',
    {
        templateUrl : "Views/ProductManagement/displayProduct.html",
        controller : "productController"
    })
    .when('/addproduct',
    {
        templateUrl : "Views/ProductManagement/addProduct.html",
        controller : "productController"
    })
    .when('/usercart',{
        templateUrl : "Views/ProductManagement/viewOrders.html",
        controller : "productController"
    })
    .otherwise(
    {
        template : "<h1>Page Not Found</h1>"
    })

    // get rid of the hash in the URL
    $locationProvider.html5Mode(true);
})