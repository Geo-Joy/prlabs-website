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
app.controller('homeCtrl', function($scope,$timeout,$rootScope){
    $scope.loader = true;
    $timeout(function() {
        $scope.loader = false;
        if($rootScope.rout !== undefined){
            if($rootScope.rout == 'home'){
                 angular.element('#homeUrl').trigger('click');
            }
            else if($rootScope.rout == 'about'){
                angular.element('#aboutUrl').trigger('click');
            }else if($rootScope.rout == 'products'){
                angular.element('#productUrl').trigger('click');
            }else{
                angular.element('#serviceUrl').trigger('click');
            }
        }

    }, 2500);

});
app.controller('portfolioCtrl', function($scope,$timeout){
    $scope.loader = true;
    $timeout(function() {
        $scope.loader = false;
    }, 1000);

});
app.controller('jobCtrl', function($scope,$timeout,$rootScope){
    $scope.loader = true;
    $timeout(function() {
        $scope.loader = false;
        if($rootScope.rout == 'team')
        {
            angular.element('#teamUrl').trigger('click');
        }else{
            angular.element('#careerUrl').trigger('click');
        }
        
    }, 1000);

});
app.controller('burrowCtrl', function($scope,$timeout){
    $scope.loader = true;
    $timeout(function() {
        $scope.loader = false;
    }, 1000);

});
app.controller('faithCtrl', function($scope,$timeout){
    $scope.loader = true;
    $timeout(function() {
        $scope.loader = false;
    }, 1000);

});
app.controller('syncCtrl', function($scope,$timeout){
    $scope.loader = true;
    $timeout(function() {
        $scope.loader = false;
    }, 1000);

});






app.controller('menuCntrl', function($scope, $document,$stateParams,$state,$rootScope,$location){
    $scope.menu_cntrl = function(data){

        if($location.path() == '/home'){
            if(data == 'team' || data == 'job' ){
                $state.go('jobs');
            }else{
                $state.go('home');
            }
        }else{
            if(data == 'team' || data == 'job' ){
                $state.go('jobs');
            }else if(data == 'portfolio'){
                $state.go('portfolio');
            }
            else{
                $state.go('home');
            }
        }


        
    	$rootScope.rout = data;
    }
});











