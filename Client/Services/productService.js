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

    this.put = function(url, data){
        var request = $http({
            method: "put",
            url: url,
            data: data
        });
        return request;
    }

    this.delete = function(url,Id){
        var request = $http({
            method : 'Delete',
            url : url  + Id

        })
        return request;
    }
}])