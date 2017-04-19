var app = angular.module("app",["ngRoute"]);

app.config(function($routeProvider,$locationProvider){
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
        controller : "registerUserController"//,
        //controllerAs : 'login'
    })
    .when('/viewproduct',
    {
        templateUrl : "Views/UserManagement/displayProduct.html",
        controller : "productController"
    })
    .otherwise(
    {
        template : "<h1>Page Not Found</h1>"
    })

    // get rid of the hash in the URL
    $locationProvider.html5Mode(true);
})