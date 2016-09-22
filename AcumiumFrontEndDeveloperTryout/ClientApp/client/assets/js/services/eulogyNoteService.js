'use strict';

angular.module('mlw.services')
    .factory('EulogyNote', ['$resource', 'serviceUrlService', function ($resource,serviceUrlService) {
        return $resource(serviceUrlService.getServiceUrl() + '/eulogyNote/:id', { id: '@id' }, {
            update: {
                method: 'PUT'
            }
        });
}]);
