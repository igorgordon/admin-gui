'use strict';

/* Services */

var app = angular.module('phonecatServices', ['ngResource']);

app.factory('User', function ($resource) {
        return $resource('phones/:phoneId.json', {}, {
            query: {method: 'GET', params: {phoneId: 'phones'}, isArray: true}
        });
    });


//app.factory('Json', function ($resource) {
//    return $resource('phones/:phones2.json', {}, {
//        query: {method: 'GET', params: {phoneId: 'phones'}, isArray: true}
//    });
//});

app.factory('JsonArr', function ($resource) {
//    return $resource('', [
//        {"name": "Nexus S",
//            "snippet": "Fast just got faster with Nexus S.",
//            "age": 0},
//        {"name": "Motorola XOOM™ with Wi-Fi",
//            "snippet": "The Next, Next Generation tablet.",
//            "age": 1},
//        {"name": "MOTOROLA XOOM™",
//            "snippet": "The Next, Next Generation tablet.",
//            "age": 2}
//    ], {
//        query: {method: 'GET', params: {phoneId: 'phones'}, isArray: true}
//    });


    return [
        {"name": "Nexus S",
            "snippet": "Fast just got faster with Nexus S.",
            "age": 0},
        {"name": "Motorola XOOM™ with Wi-Fi",
            "snippet": "The Next, Next Generation tablet.",
            "age": 1},
        {"name": "MOTOROLA XOOM™",
            "snippet": "The Next, Next Generation tablet.",
            "age": 2}
    ];

});


//var servicesModule = angular.module('myApp.services', [])
//servicesModule.service('Service1', function(){});
//servicesModule.service('Service2', function(){});


//
//var app = angular.module('myApp', []);
//
//app.controller( 'AppCtrl', function AppCtrl($scope, nametrickService, nametrickFactory) {
//    $scope.name = 'Guest';
//    $scope.reverseNameService = function() {
//        $scope.name = nametrickService.reverse($scope.name);
//    };
//    $scope.reverseNameFactory = function() {
//        $scope.name = nametrickFactory.reverse($scope.name);
//    };
//});
//
//app.service('nametrickService', function() {
//    this.reverse = function(name) {
//        return name.split("").reverse().join("");
//    };
//});
//
//app.factory('nametrickFactory', function() {
//    return {
//        reverse : function(name) {
//            return name.split("").reverse().join("");
//        }
//    }
//});
