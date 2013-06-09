'use strict';

/* App Module */

var app = angular.module('phonecat', ['phonecatFilters', 'phonecatServices']).
        config(['$routeProvider', function($routeProvider) {
        $routeProvider.
                when('/users', {templateUrl: 'partials/users-list.html', controller: UserListCtrl}).
//                when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl}).
                when('/users/:userId', {templateUrl: 'partials/userDetails.html', controller: UserDetailCtrl}).
                when('/levelEdit/:level', {templateUrl: 'partials/levelDetails.html', controller: LevelDetailCtrl}).
                when('/levels', {templateUrl: 'partials/levelProgression-list.html', controller: LevelListCtrl}).
                when('/search', {templateUrl: 'partials/search.html', controller: SearchCtrl}).
                when('/tester', {templateUrl: 'partials/tester.html', controller: TesterCtrl}).
                when('/index',  {templateUrl: 'partials/search.html', controller: SearchCtrl});

//            otherwise({redirectTo: '/index'});
//            otherwise({redirectTo: '/search'});


    }]);


app.service('sharedData', function() {
    var users;
    var levels;
});


/*
app = angular.module('phonecat', ['ui.state']);

app.config(function($stateProvider, $routeProvider){
    $stateProvider
        .state('index', {
            url: "", // root route
            views: {
                "viewA": {
                    templateUrl: "index.viewA.html"
                },
                "viewB": {
                    templateUrl: "index.viewB.html"
                }
            }
        })
        .state('route1', {
            url: "/route1",
            views: {
                "viewA": {
                    templateUrl: "route1.viewA.html"
                },
                "viewB": {
                    templateUrl: "route1.viewB.html"
                }
            }
        })
        .state('route2', {
            url: "/route2",
            views: {
                "viewA": {
                    templateUrl: "route2.viewA.html"
                },
                "viewB": {
                    templateUrl: "route2.viewB.html"
                }
            }
        })
})
*/
