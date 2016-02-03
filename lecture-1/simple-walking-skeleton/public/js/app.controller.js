(function(){
  "use strict";
  
  angular
    .module("mycms", [])
    .controller('cmsController', cmsController);
  
  function cmsController($scope, cmsService){
    $scope.message = "Hello from me";
    
    cmsService.getContent()
      .then(function(data){
        $scope.content = data;  
      })
  }
  
})();