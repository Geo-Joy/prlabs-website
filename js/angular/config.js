app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'views/home.html'
    })
    .state('career', {
        url: '/career',
        templateUrl: 'views/career.html'
    })
    .state('burrow', {
        url: '/burrow',
        templateUrl: 'views/burrow.html'
    })
});