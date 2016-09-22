'use strict';

angular.module('mlw.services')
    .factory('serviceUrlService', [function () {
        return {
            getServiceUrl: function () {
                return 'http://localhost:8081';
            }
        };
    }])
;
