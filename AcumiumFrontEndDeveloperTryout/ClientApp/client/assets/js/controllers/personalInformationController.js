'option strict';

angular.module('mlw.controllers')
    .controller('PersonalInformationCtrl', [ '$scope','$controller','$location','PersonalInformation','FoundationApi', function($scope,$controller,$location,PersonalInformation,FoundationApi) {

        angular.extend(this, $controller('BaseCtrl', {$scope: $scope}));

        $scope.getEntityName = function() {
            return 'personalInformation';;
        }

        $scope.entities = PersonalInformation.query();

        $scope.addEntity = function(entity) {
            PersonalInformation.save(entity,function(entity){
                FoundationApi.publish('personalInformation.added', entity);
            });
        };

        $scope.setupEvents($scope.getEntityName());

    }]);