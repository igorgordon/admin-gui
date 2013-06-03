'use strict';

/* App Module */

angular.module('phonecat', ['phonecatFilters', 'phonecatServices']).
    config(['$routeProvider', function($routeProvider) {$routeProvider.
            when('/users',          {templateUrl: 'partials/users-list.html',   controller: UsersListCtrl}).
            when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl}).
            when('/users/:userId',   {templateUrl: 'partials/userDetails.html', controller: UserDetailCtrl}).
            when('/levels',          {templateUrl: 'partials/levelProgression-list.html', controller: LevelListCtrl}).

            otherwise({redirectTo: '/levels'});
//            otherwise({redirectTo: '/phones'});


    }]);
