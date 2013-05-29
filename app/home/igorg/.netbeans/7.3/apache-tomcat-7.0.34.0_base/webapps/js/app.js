'use strict';

/* App Module */

angular.module('phonecat', ['phonecatFilters', 'phonecatServices']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/phones', {templateUrl: 'partials/phone-list.html',   controller: PhoneListCtrl}).
            when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl}).
            when('/users/:userId', {templateUrl: 'partials/userDetails.html', controller: UserDetailCtrl}).
            when('/levels', {templateUrl: 'partials/levelProgression-list.html', controller: LevelListCtrl}).

            otherwise({redirectTo: '/levels'});
//            otherwise({redirectTo: '/phones'});


    }]);
