'option strict';

angular.module('mlw.controllers')
    .controller('EulogyNoteCtrl', [ '$scope','$controller','$location','EulogyNote','FoundationApi', function($scope,$controller,$location,EulogyNote,FoundationApi) {

        angular.extend(this, $controller('BaseCtrl', {$scope: $scope}));

        $scope.getEntityName = function() {
            return 'eulogyNote';;
        }

        $scope.entities = EulogyNote.query();

        $scope.addEntity = function(entity) {
            EulogyNote.save(entity,function(entity){
                FoundationApi.publish('eulogyNote.added', entity);
            });
        };

        $scope.setupEvents($scope.getEntityName());

    }]);