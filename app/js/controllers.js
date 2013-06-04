'use strict';

/* Controllers */
//var serverURL = 'http://127.0.0.1:8080/admin/api';
var config;

var usersGlobal;


//xmlhttp.open("GET","http://127.0.0.1:8080/app/js/appconfig.json",true);
//var temp = xmlhttp.send();


    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
//            document.getElementById("myDiv").innerHTML=xmlhttp.responseText;

            config=JSON.parse(xmlhttp.response);
        }
    }
    xmlhttp.open("GET","/app/js/appconfig.json",true);
    xmlhttp.send();



function UserListCtrl($scope, User, $http) {
    $scope.users = usersGlobal;
    $scope.searchServer = function() {
        var getResult = $http.get(config.serverURL + '/users?name='+this.text + '&start=0&size=200');

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



    $http.get(config.serverURL + '/games/60/levelProgression?startPage=0&pageSize=200').success(function(data) {
        $scope.levels = data;
    });

//  $scope.users = User.query();
  $scope.orderProp = 'age';
}

//PhoneListCtrl.$inject = ['$scope', 'Phone'];
function LevelListCtrl($scope, JsonArr,$http) {
    $http.get(config.serverURL + '/games/60/levelProgression?startPage=0&pageSize=200').success(function(data) {
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

    $http.get(config.serverURL + '/user/'+$routeParams.userId).success(function(data) {
        $scope.user = data;
        $scope.userOriginal = angular.copy(data);
    });

    //$scope.update = function(id,deltaBalance,deltaGeneralXP,deltaBlackjackXP,deltaSlotsXP,deltaRouletteXP) {
//    $scope.update = function(user,realBalance,generalXP,blackjackXP,slotsXP,rouletteXP){
   $scope.update = function(){
        
        var deltaBalance = $scope.user.general.realBalance - $scope.userOriginal.general.realBalance;
        var deltaGeneralXP = $scope.user.general.xp - $scope.userOriginal.general.xp;
        var deltaBlackjackXP = $scope.user.blackjack.xp - $scope.userOriginal.blackjack.xp;
        var deltaSlotsXP = $scope.user.slots.xp - $scope.userOriginal.slots.xp;
        var deltaRouletteXP = $scope.user.roulette.xp - $scope.userOriginal.roulette.xp;
        
        var data = "{\"id\":"+$scope.user.id+",\"deltaBalance\":"+deltaBalance+",\"deltaGeneralXP\":"+deltaGeneralXP+",\"deltaBlackjackXP\":"+deltaBlackjackXP+",\"deltaSlotsXP\":"+deltaSlotsXP+",\"deltaRouletteXP\":"+deltaRouletteXP+"}";
        var putResult = $http.put(config.serverURL + '/user/'+$scope.user.id, data);

        putResult.success(function(data) {
            alert("success:" + data);
        });

        putResult.error(function(data) {
            alert("error:" + data);
        });
    };
    
    $scope.log = function(obj){
        console.log(obj);
    };
}




function IndexCtrl ($scope , $location){}



function SearchCtrl($scope, $routeParams, $http,$location) {

    $scope.searchServer = function() {
        var getResult = $http.get(config.serverURL + '/users?name='+this.text + '&start=0&size=200');

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

function MainCntl ($scope,$http){

}