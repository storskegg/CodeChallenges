'option strict';

angular.module('mlw.controllers')
    .controller('CreditCardCtrl', [ '$scope','$controller','$location','CreditCard','FoundationApi', function($scope,$controller,$location,CreditCard,FoundationApi) {

        angular.extend(this, $controller('BaseCtrl', {$scope: $scope}));

        $scope.getEntityName = function() {
            return 'creditCard';;
        }

        $scope.entities = CreditCard.query();

        $scope.addEntity = function(entity) {
            CreditCard.save(entity,function(entity){
                FoundationApi.publish('creditCard.added', entity);
            });
        };

        $scope.setupEvents($scope.getEntityName());

    }]);