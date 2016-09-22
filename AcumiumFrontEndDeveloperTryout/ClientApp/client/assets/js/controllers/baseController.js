'option strict';

angular.module('mlw.controllers')
    .controller('BaseCtrl', [ '$scope','$location','FoundationApi', function($scope,$location,FoundationApi) {

        $scope.getEntityName = function() {
          return 'entity';;
        }

        $scope.editEntity = function(entity) {
            entity.isEditing = false;
            entity.$update(function() {
                FoundationApi.publish($scope.getEntityName() + '.updated', entity);
            });
        };

        $scope.deleteEntity = function(entity) {
            entity.$delete(function() {
                FoundationApi.publish($scope.getEntityName() + '.deleted', entity);
            });
        };

        $scope.setEditMode = function(entity) {
            for(var i=0;i<$scope.entities.length;i++) {
                $scope.entities[i].isEditing = false;
            }
            $scope.backupEntity = angular.copy(entity);
            entity.isEditing = true;
        };

        $scope.cancelEditMode = function(form, entity) {
            if(!form.$pristine) {
                if (confirm("You have unsaved changes. Do you wish to discard your changes?") == true) {
                    cancelEditMode(form, entity);
                }
            }else {
                cancelEditMode(form, entity);
            }
        };

        function cancelEditMode(form, entity) {
            if($scope.backupEntity) {
                var index = $scope.entities.indexOf(entity);
                entity = angular.copy($scope.backupEntity);
                $scope.entities[index] = entity;
            }

            form.$setPristine();
            entity.isEditing = false;
        }

        $scope.setupEvents = function(entityName) {
            FoundationApi.subscribe(entityName + '.added', function(entity) {
                $scope.entities.push(entity);
            });

            FoundationApi.subscribe(entityName + '.updated', function(entity) {

            })

            FoundationApi.subscribe(entityName + '.deleted', function(entity) {
                var index = $scope.entities.indexOf(entity);
                $scope.entities.splice(index, 1);
            });;
        }




    }]);