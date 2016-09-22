'option strict';

angular.module('mlw.controllers')
    .controller('PasswordResetCtrl', [ '$scope','$location', function($scope,$location) {

        $scope.submitPasswordReset = function() {
            if($scope.passwordreset == 'test@test.com') {
                $location.url('/home');
            }else {
                alert('invalid creds / use test@test.com')
            }
        }
}]);