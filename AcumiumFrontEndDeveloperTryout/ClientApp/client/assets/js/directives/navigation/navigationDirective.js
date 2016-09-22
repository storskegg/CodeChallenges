angular.module('mlw.controllers')
    .directive('navigation', function() {
        return {
            restrict: 'E',
            templateUrl: '/templates/partials/navigation/navigation.html',
            controller: ['$scope','$window','$location', function ($scope,$window,$location) {

                //TODO: Get this from service
                $scope.navigationItems = [
                    {
                        "state": "dashboard",
                        "name": "Dashboard"
                    },
                    {
                        "state": "personalInformationManage",
                        "name": "Personal Information"
                    },
                    {
                        "state": "creditCardManage",
                        "name": "Credit Cards"
                    },
                    {
                        "state": "loanManage",
                        "name": "Loans"
                    },
                    {
                        "state": "eulogyNoteManage",
                        "name": "Eulogy Notes"
                    }
                ];
            }]
        };
    });