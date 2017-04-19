productApp.service("productService",["$http",function($http){

    this.get = function(url){
        return $http({
            METHOD : 'GET',
            url : url
        });
    }

    this.post = function(url,data){
        return $http({
            METHOD : 'post',
            url : url,
            data : data
        });
    }

    this.put = function(url,ID){
        return $http({
            METHOD : 'post',
            url : url +"/"+ ID
        });
    }
}])