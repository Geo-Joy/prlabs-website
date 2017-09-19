app.controller('prlCtrl', ['$scope','$state','$http', function ($scope,$state,$http)  {
    $scope.mail = {};
    $scope.logEmail = function(){
        $http({
            url: "http://localhost/paperRocketLab/website/mail.php",
            method: "POST",
            data: {
                data: $scope.mail
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).success(function(response) {
            console.log(response);
        });	
    }
}]);
app.controller('homeCtrl', function($scope,$timeout){
    $scope.loader = true;
    $timeout(function() {
        $scope.loader = false;
    }, 2500);

});
app.controller('portfolioCtrl', function($scope,$timeout){
    $scope.loader = true;
    $timeout(function() {
        $scope.loader = false;
    }, 500);

});
app.controller('jobCtrl', function($scope,$timeout){
    $scope.loader = true;
    $timeout(function() {
        $scope.loader = false;
    }, 500);

});
app.controller('burrowCtrl', function($scope,$timeout){
    $scope.loader = true;
    $timeout(function() {
        $scope.loader = false;
    }, 500);

});
app.controller('faithCtrl', function($scope,$timeout){
    $scope.loader = true;
    $timeout(function() {
        $scope.loader = false;
    }, 500);

});
app.controller('syncCtrl', function($scope,$timeout){
    $scope.loader = true;
    $timeout(function() {
        $scope.loader = false;
    }, 500);

});






app.controller('menuCntrl', function($scope, $document,$stateParams,$state,$rootScope){
    $scope.menu_cntrl = function(data){
        if(data == 'team' || data == 'job' ){
            $state.go('jobs');
        }else{
            $state.go('home');
        }
    	$rootScope.rout = data;
    }
});











