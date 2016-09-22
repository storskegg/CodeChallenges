'use strict';

angular.module('mlw.services')
    .factory('authenticationService', ['$http', '$q','serviceUrlService', function ($http, $q,serviceUrlService) {
        return {
            logInUser: function (loginModel) {
                var deferred = $q.defer();

                $http(
                    {
                        url: serviceUrlService.getServiceUrl() + '/user/login',
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        data: loginModel
                    }).success(function (data) {
                        deferred.resolve(data);
                    }).error(function () {
                        deferred.reject("An error occurred while authenticating user");
                    });

                return deferred.promise;
            }
        };
    }])
;
