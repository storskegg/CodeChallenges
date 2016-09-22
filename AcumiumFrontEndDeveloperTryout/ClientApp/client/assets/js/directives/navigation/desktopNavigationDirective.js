angular.module('mlw.controllers')
    .directive('desktopNavigation', function() {
        return {
            restrict: 'E',
            templateUrl: '/templates/partials/navigation/desktopNavigation.html',
            controller: ['$scope','$window','$location', function ($scope,$window,$location) {

            }]
        };
    });