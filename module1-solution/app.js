(function () {
    'use strict';

    angular
        .module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.lunchItems = "";
        $scope.message = "";

        $scope.parseItems = function(){
            var lunch = $scope.lunchItems;
            var lunchList = lunch.split(',');

            if(lunch == ""){
                $scope.message = "Please enter data first";
            }
            else if(lunchList.length <= 3){
                    $scope.message = "Enjoy!";
                }
            else{
                    $scope.message = "Too much!";
                }
        };
    }
})();