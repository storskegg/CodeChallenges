'option strict';

angular.module('mlw.controllers')
    .controller('PersonalParentCtrl', [ '$scope','$controller','$location','PersonalParent','FoundationApi', function($scope,$controller,$location,PersonalParent,FoundationApi) {

        angular.extend(this, $controller('BaseCtrl', {$scope: $scope}));

        $scope.getEntityName = function() {
            return 'personalParent';;
        }

        $scope.entities = PersonalParent.query();

        $scope.addEntity = function(entity) {
            PersonalParent.save(entity,function(entity){
                FoundationApi.publish('personalParent.added', entity);
            });
        };

        $scope.setupEvents($scope.getEntityName());

    }]);