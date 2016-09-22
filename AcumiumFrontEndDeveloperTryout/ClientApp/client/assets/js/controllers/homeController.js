'option strict';

angular.module('mlw.controllers')
    .controller('HomeCtrl', [ '$scope','$location','authenticationService', function($scope,$location,authenticationService) {

        $scope.logIn = function() {
            var loginModel = {
                email: $scope.email,
                password: $scope.password
            };


            authenticationService.logInUser(loginModel).then(function (data) {
                $scope.loginResult = data;

                if ($scope.loginResult.authenticationStatus === 0) {
                    $location.url('/login/mfa');
                } else {
                    alert("invalid creds -> use test@test.com / test");
                }
            }, function (errorMessage) {
            });


        }

        $scope.submitSecurityCode = function() {
            if($scope.securityCode == 'test') {
                $location.url('/dashboard');
            }else {
                alert('invalid creds / use test')
            }
        }
}]);