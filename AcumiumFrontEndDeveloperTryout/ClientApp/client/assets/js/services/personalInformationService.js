'use strict';

angular.module('mlw.services')
    .factory('PersonalInformation', ['$resource', 'serviceUrlService', function ($resource,serviceUrlService) {
        return $resource(serviceUrlService.getServiceUrl() + '/personalInformation/:id', { id: '@id' }, {
            update: {
                method: 'PUT'
            }
        });
}]);
