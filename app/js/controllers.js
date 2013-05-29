'use strict';

/* Controllers */

//function PhoneListCtrl($scope, User , LevelProgression) {

function PhoneListCtrl($scope, User, $http) {
    $http.get('http://127.0.0.1:8084/admin/api/games/60/levelProgression?startPage=0&pageSize=200').success(function(data) {
        $scope.levels = data;
    });

  $scope.users = User.query();
  $scope.orderProp = 'age';
}

//PhoneListCtrl.$inject = ['$scope', 'Phone'];
function LevelListCtrl($scope, JsonArr,$http) {
    $http.get('http://127.0.0.1:8084/admin/api/games/60/levelProgression?startPage=0&pageSize=200').success(function(data) {
        $scope.levels = data;
    });

    $scope.orderProp = 'age';
    $scope.jsonArr = JsonArr;

//    $scope.jsonArr = [
//        {"name": "Nexus S",
//            "snippet": "Fast just got faster with Nexus S.",
//            "age": 0},
//        {"name": "Motorola XOOM™ with Wi-Fi",
//            "snippet": "The Next, Next Generation tablet.",
//            "age": 1},
//        {"name": "MOTOROLA XOOM™",
//            "snippet": "The Next, Next Generation tablet.",
//            "age": 2}
//    ];
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

    $scope.update = function(id,deltaBalance,deltaGeneralXP,deltaBlackjackXP,deltaSlotsXP,deltaRouletteXP) {
        var data = "{\"id\":"+id+",\"deltaBalance\":"+deltaBalance+",\"deltaGeneralXP\":"+deltaGeneralXP+",\"deltaBlackjackXP\":"+deltaBlackjackXP+",\"deltaSlotsXP\":"+deltaSlotsXP+",\"deltaRouletteXP\":"+deltaRouletteXP+"}";
        var putResult = $http.put('http://127.0.0.1:8084/admin/api/user/'+id, data);

        putResult.success(function(data) {
            alert("success:" + data);
        });


        putResult.error(function(data) {
            alert("error:" + data);
        });
    };

    $http.get('http://127.0.0.1:8084/admin/api/user/'+$routeParams.userId).success(function(data) {
        $scope.user = data;
    });
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone'];
