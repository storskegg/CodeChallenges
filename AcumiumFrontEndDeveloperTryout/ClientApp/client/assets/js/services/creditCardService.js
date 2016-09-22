'use strict';

angular.module('mlw.services')
    .factory('CreditCard', ['$resource', 'serviceUrlService', function ($resource,serviceUrlService) {
        return $resource(serviceUrlService.getServiceUrl() + '/creditCard/:id', { id: '@id' }, {
            update: {
                method: 'PUT'
            }
        });
}]);
