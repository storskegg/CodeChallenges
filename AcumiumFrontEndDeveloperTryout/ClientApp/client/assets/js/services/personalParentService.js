'use strict';

angular.module('mlw.services')
    .factory('PersonalParent', ['$resource', 'serviceUrlService', function ($resource,serviceUrlService) {
        return $resource(serviceUrlService.getServiceUrl() + '/personalParent/:id', { id: '@id' }, {
            update: {
                method: 'PUT'
            }
        });
}]);
