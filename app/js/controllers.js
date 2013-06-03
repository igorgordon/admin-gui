'use strict';

/* Controllers */
var serverURL = 'http://127.0.0.1:8080/admin/api';
var usersGlobal;
function UserListCtrl($scope, User, $http) {
    $scope.users = usersGlobal;
    $scope.searchServer = function() {
        var getResult = $http.get(serverURL + '/user?name='+this.text + '&start=0&size=200');

        getResult.success(function(data) {
//            alert("success:" + data);
            $scope.users = data;
//          $location.path('users');
            $scope.$apply();
        });

        getResult.error(function(data) {
            alert("error:" + data);
        });
    };



    $http.get(serverURL + '/games/60/levelProgression?startPage=0&pageSize=200').success(function(data) {
        $scope.levels = data;
    });

//  $scope.users = User.query();
  $scope.orderProp = 'age';
}

//PhoneListCtrl.$inject = ['$scope', 'Phone'];
function LevelListCtrl($scope, JsonArr,$http) {
    $http.get(serverURL + '/games/60/levelProgression?startPage=0&pageSize=200').success(function(data) {
        $scope.levels = data;
    });

    $scope.orderProp = 'age';
    $scope.jsonArr = JsonArr;

}


function PhoneDetailCtrl($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
        $scope.mainImageUrl = phone.images[0];
  });

    $scope.setImage = function(imageUrl) {
        $scope.mainImageUrl = imageUrl;
  }
}

function UserDetailCtrl($scope, $routeParams, $http) {

    $http.get(serverURL + '/user/'+$routeParams.userId).success(function(data) {
        $scope.user = data;
    });

    $scope.update = function(id,deltaBalance,deltaGeneralXP,deltaBlackjackXP,deltaSlotsXP,deltaRouletteXP) {
        var data = "{\"id\":"+id+",\"deltaBalance\":"+deltaBalance+",\"deltaGeneralXP\":"+deltaGeneralXP+",\"deltaBlackjackXP\":"+deltaBlackjackXP+",\"deltaSlotsXP\":"+deltaSlotsXP+",\"deltaRouletteXP\":"+deltaRouletteXP+"}";
        var putResult = $http.put(serverURL + '/user/'+id, data);

        putResult.success(function(data) {
            alert("success:" + data);
        });

        putResult.error(function(data) {
            alert("error:" + data);
        });
    };
}

function IndexCtrl ($scope , $location){}



function SearchCtrl($scope, $routeParams, $http,$location) {

    $scope.searchServer = function() {
        var getResult = $http.get(serverURL + '/user?name='+this.text + '&start=0&size=200');

        getResult.success(function(data) {
//            alert("success:" + data);
              usersGlobal = data;
              $location.path('users');
        });

        getResult.error(function(data) {
            alert("error:" + data);
        });
    };
}

function Ctrl($scope) {
    $scope.list = [];
    $scope.text = 'hello';
    $scope.submit = function() {
        if (this.text) {
            this.list.push(this.text);
            this.text = '';
        }
    };
}