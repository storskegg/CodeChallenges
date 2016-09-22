angular.module('mlw.controllers')
    .directive('mobileNavigation', function() {
        return {
            restrict: 'E',
            templateUrl: '/templates/partials/navigation/mobileNavigation.html',
            controller: ['$scope','$window','$location', function ($scope,$window,$location) {

            }]
        };
    });