app.controller('prlCtrl', ['$scope','$state', function ($scope,$state)  {
    // alert($state.current.name);
    $scope.mail = {};
    $scope.logEmail = function(){
    	alert("contact data");
    	
    }
}]);
app.controller('homeCtrl', function($scope, $document){
    console.log("asd");
});



