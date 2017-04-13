app.service("APIService", function ($http) {
    this.getSubs = function () {
        return $http.get("api/user")
    }

    this.saveSubscriber = function (sub) {
        return $http(
            {
                method: 'post',
                data: sub,
                url: 'api/user'
            });
    }  
    this.updateSubscriber = function (sub) {
        return $http(
            {
                method: 'put',
                data: sub,
                url: 'api/user'
            });
    } 

    this.deleteSubscriber = function (SubId) {

        var url = 'api/User/' + SubId;  
        return $http(
            {
                method: 'delete',
                data: SubId,
                url: url
            });  
    }
}); 