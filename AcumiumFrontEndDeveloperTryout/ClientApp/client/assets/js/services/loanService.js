'use strict';

angular.module('mlw.services')
    .factory('Loan', ['$resource', 'serviceUrlService', function ($resource,serviceUrlService) {
        return $resource(serviceUrlService.getServiceUrl() + '/loan/:id', { id: '@id' }, {
            update: {
                method: 'PUT'
            }
        });
}]);
