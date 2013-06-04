'use strict';

/* App Module */

var app = angular.module('phonecat', ['phonecatFilters', 'phonecatServices']).
        config(['$routeProvider', function($routeProvider) {
        $routeProvider.
                when('/users', {templateUrl: 'partials/users-list.html', controller: UserListCtrl}).
                when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl}).
                when('/users/:userId', {templateUrl: 'partials/userDetails.html', controller: UserDetailCtrl}).
                when('/levels', {templateUrl: 'partials/levelProgression-list.html', controller: LevelListCtrl}).
                when('/search', {templateUrl: 'partials/search.html', controller: SearchCtrl}).
                when('/tester', {templateUrl: 'partials/tester.html', controller: SearchCtrl}).
                when('/index',           {templateUrl: 'index.html', controller: MainCntl});

//            otherwise({redirectTo: '/index'});
//            otherwise({redirectTo: '/search'});


    }]);
