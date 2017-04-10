var angularJSASP = angular.module('angularJSASP', ["ui.router","ui.bootstrap"]);

angularJSASP.controller('LandingPageController', LandingPageController);
angularJSASP.controller('LoginController', LoginController);
angularJSASP.controller('RegisterController', RegisterController);

angularJSASP.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
angularJSASP.controller('LoginFactory', LoginFactory);
angularJSASP.factory('RegistrationFactory', RegistrationFactory);

var configFunction = function ($stateProvider, $httpProvider, $locationProvider) {
    $locationProvider.hashPrefix('!').html5Mode(true);

    /*
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

    */



    $stateProvider
        .state('stateOne', {
            url: '/stateOne?donuts',
            views: {
                "containerOne": {
                    templateUrl: '/routesDemo/one'
                },
                "containerTwo": {
                    templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
                },
                "nestedView@stateOne": {
                    templateUrl: '/routesDemo/four'
                }
            }
        })
        .state('stateTwo', {
            url: '/stateTwo',
            views: {
                "containerOne": {
                    templateUrl: '/routesDemo/one'
                },
                "containerTwo": {
                    templateUrl: '/routesDemo/three'
                }
            }
        })
        .state('stateThree', {
            url: '/stateThree?donuts',
            views: {
                "containerOne": {
                    templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
                },
                "containerTwo": {
                    templateUrl: '/routesDemo/three'
                }
            }
        })
        .state('loginRegister', {
            url: '/loginRegister?returnUrl',
            views: {
                "containerOne": {
                    templateUrl: '/Account/Login',
                    controller: LoginController
                },
                "containerTwo": {
                    templateUrl: '/Account/Register',
                    controller: RegisterController
                }
            }
        });



    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}
configFunction.$inject = ['$stateProvider', '$httpProvider', '$locationProvider'];

angularJSASP.config(configFunction);