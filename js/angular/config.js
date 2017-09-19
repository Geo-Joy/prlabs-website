app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'homeCtrl',

    })
    .state('portfolio', {
        url: '/portfolio',
        templateUrl: 'views/portfoliopage.html',
        controller: 'portfolioCtrl'
    })
    .state('jobs', {
        url: '/jobs',
        templateUrl: 'views/career.html',
        controller: 'jobCtrl'

    })
    .state('designer', {
        url: '/designer',
        templateUrl: 'views/designer.html'
    })
    .state('burrow', {
        url: '/burrow',
        templateUrl: 'views/burrow.html',
        controller: 'burrowCtrl'
    })
    .state('faith', {
        url: '/faith',
        templateUrl: 'views/faith.html',
        controller: 'faithCtrl'
    })
    .state('sync', {
        url: '/sync',
        templateUrl: 'views/sync.html',
        controller: 'syncCtrl'
    })
    
});