productApp.service("productService",["$http",function($http){

    this.get = function(url){
       var request = $http({
            METHOD : 'GET',
            url : url
        });

        return request;
    }

    this.post = function (url, data) {
        var request = $http({
            method: "post",
            url: url,
            data: data
        });
        return request;
    }

    this.put = function(url,ID){
        var request = $http({
            method: "post",
            url : url,
            data: Model
        });
        return request;
    }
}])