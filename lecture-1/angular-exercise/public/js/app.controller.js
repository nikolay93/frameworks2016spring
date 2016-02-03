(function(){
  "use strict";
  
  angular
    .module('mycms', [])
    .controller('cmsController', cmsController);
  
  function cmsController($scope, cmsService){
    $scope.message = "Hello World from Angular Controller";
    
    var modelContent = function(data){
      $scope.content = data;
    }

    $scope.getContent = function(){
      cmsService.getContent()
       .then(modelContent);
    }
    
  }
  
})();