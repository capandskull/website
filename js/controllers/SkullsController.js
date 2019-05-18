angular.module('SkullsController', [])

.controller('SkullsController', function($scope, DataService) {

  $scope.data = [];

  var init = function() {
    DataService.skulls()
      .then(function(data) {

        $scope.data = JSON.parse(JSON.stringify(data.data));
        $scope.data = $scope.data.sort(function(a, b) {
          return b.year - a.year;
        });
        for(var i = 0; i < $scope.data.length; i++) {
          $scope.data[i].skulls = $scope.data[i].skulls.sort(
            function(a, b) {
              $ax = a.trim("* ").split(" ")
              $bx = b.trim("* ").split(" ")
              if($ax[$ax.length-1] > $bx[$bx.length-1]) {
                return 1;
              } else if ($bx[$bx.length-1] > $ax[$ax.length-1]) {
                return -1;
              }
              /*if(a.name > b.name) {
                return 1;
              }
              else if (a.name < b.name) {
                return -1;
              }
              */
              return 0;
            }
          );
        }

      }, function(data) {

      });
  }

  init();

});
