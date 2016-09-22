'option strict';

angular.module('mlw.controllers')
    .controller('LoanCtrl', [ '$scope','$controller','$location','Loan','FoundationApi', function($scope,$controller,$location,Loan,FoundationApi) {

        angular.extend(this, $controller('BaseCtrl', {$scope: $scope}));

        $scope.getEntityName = function() {
            return 'loan';;
        }

        $scope.entities = Loan.query();

        $scope.addEntity = function(entity) {
            Loan.save(entity,function(entity){
                FoundationApi.publish('loan.added', entity);
            });
        };

        $scope.setupEvents($scope.getEntityName());

    }]);