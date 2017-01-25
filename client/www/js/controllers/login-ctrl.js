angular.module('crecemasCtrl')
.controller('loginCtrl', function($scope, $state){
    $scope.user = {};
    $scope.login = function(isValid){
        if(isValid){
            if($scope.user.userName == "alumno"){
                $state.go('alumno.home');
            }
            if($scope.user.userName == "profesor"){
                $state.go('profesor.home');
            }
        }
    }
});