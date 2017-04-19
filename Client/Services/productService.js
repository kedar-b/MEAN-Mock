productApp.service("productService",["$http",function($http){

    this.get = function(url){
        return $http({
            METHOD : 'GET',
            url : url
        });
    }

    this.post = function (apiRoute, Model) {
        var request = $http({
            method: "post",
            url: apiRoute,
            data: Model
        });
        return request;
    }

    this.put = function(url,ID){
        return $http({
            METHOD : 'post',
            url : url +"/"+ ID
        });
    }
}])