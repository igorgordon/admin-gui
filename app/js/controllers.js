'use strict';

/* Controllers */
//var serverURL = 'http://127.0.0.1:8080/admin/api';
var config;

//var usersGlobal;


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



function UserListCtrl($scope, User, $http,sharedData) {
//    $scope.users = usersGlobal;
    $scope.users = sharedData.users;
    $scope.searchServer = function() {
        var getResult = $http.get(config.serverURL + '/users?name='+this.text + '&start=0&size=200');

        getResult.success(function(data) {
//            alert("success:" + data);
            sharedData.users = data;
            $scope.users = data;
            $scope.$apply();
        });

        getResult.error(function(data) {
            alert("error:" + data);
        });
    };


   $http.get(config.serverURL + '/games/60/levelProgression?startPage=0&pageSize=200').success(function(data) {
        $scope.levels = data;
    });

  $scope.orderProp = 'age';
}

function LevelListCtrl($scope, JsonArr,$http,sharedData) {
    $http.get(config.serverURL + '/games/60/levelProgression?startPage=0&pageSize=200').success(function(data) {
        $scope.levels = data;
        sharedData.levels = data;
    });

    $scope.orderProp = 'age';
    $scope.jsonArr = JsonArr;

}

function UserDetailCtrl($scope, $routeParams, $http) {

    $http.get(config.serverURL + '/users/'+$routeParams.userId).success(function(data) {
        $scope.user = data;
        $scope.userOriginal = angular.copy(data);
    });

   $scope.update = function(){
        var deltaBalance = $scope.user.general.realBalance - $scope.userOriginal.general.realBalance;
        var deltaGeneralXP = $scope.user.general.xp - $scope.userOriginal.general.xp;
        var deltaBlackjackXP = $scope.user.blackjack.xp - $scope.userOriginal.blackjack.xp;
        var deltaSlotsXP = $scope.user.slots.xp - $scope.userOriginal.slots.xp;
        var deltaRouletteXP = $scope.user.roulette.xp - $scope.userOriginal.roulette.xp;
        
        var data = "{\"id\":"+$scope.user.id+",\"deltaBalance\":"+deltaBalance+",\"deltaGeneralXP\":"+deltaGeneralXP+",\"deltaBlackjackXP\":"+deltaBlackjackXP+",\"deltaSlotsXP\":"+deltaSlotsXP+",\"deltaRouletteXP\":"+deltaRouletteXP+"}";
        var putResult = $http.put(config.serverURL + '/users/'+$scope.user.id, data);

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


function LevelDetailCtrl($scope, $routeParams, $http,sharedData) {

    $scope.level = sharedData.levels[$routeParams.level -1];

    $scope.update = function(){

        sharedData.levels[$routeParams.level -1] =  $scope.level;

        var putResult = $http.put(config.serverURL + '/games/60/levelProgression?startPage=0&pageSize=200', sharedData.levels);

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


function SearchCtrl($scope, $routeParams, $http,$location,sharedData) {
    $scope.nameLastName = false;
    $scope.socialID = false;

    $scope.myFlag= false;

    $scope.searchServer = function() {


        if($scope.myFlag == 'name')
             var getResult = $http.get(config.serverURL + '/users?name='+this.text + '&start=0&size=200');

        if($scope.myFlag == 'social')
            var getResult = $http.get(config.serverURL + '/users?socialType=fb&socialId='+this.text);



        getResult.success(function(data) {
                sharedData.users = data;
              $location.path('users');
        });

        getResult.error(function(data) {
            alert("error:" + data);
        });
    };
}


function MainCntl(){}

function TesterCtrl(){}