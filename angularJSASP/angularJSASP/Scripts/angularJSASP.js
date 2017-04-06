var angularJSASP = angular.module('angularJSASP', ["ngRoute"]);

angularJSASP.controller('LandingPageController', LandingPageController);
angularJSASP.controller('LoginController', LoginController);
angularJSASP.controller('RegisterController', RegisterController);

angularJSASP.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
angularJSASP.controller('LoginFactory', LoginFactory);
angularJSASP.factory('RegistrationFactory', RegistrationFactory);

var configFunction = function ($routeProvider, $httpProvider, $locationProvider) {
    $locationProvider.hashPrefix('!').html5Mode(true);
    $routeProvider.
        when('/routeOne', {
            templateUrl: 'routesDemo/one'
        })
        .when('/routeTwo/:donuts', {
            templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
        })
        .when('/routeThree', {
            templateUrl: 'routesDemo/three'
        }).
        when('/routeTwo', {
            templateUrl: 'routesDemo/two',
           
        }).
        when('/login', {
            templateUrl: 'Account/Login',
            controller: LoginController
        }).
        when('/register', {
            templateUrl: 'Account/Register',
            controller: RegisterController
        });
    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}
configFunction.$inject = ['$routeProvider', '$httpProvider', '$locationProvider'];

angularJSASP.config(configFunction);