app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'views/home.html'
    })
    .state('portfolio', {
        url: '/portfolio',
        templateUrl: 'views/portfoliopage.html'
    })
    .state('jobs', {
        url: '/jobs',
        templateUrl: 'views/career.html'
    })
    .state('designer', {
        url: '/designer',
        templateUrl: 'views/designer.html'
    })
      .state('burrow', {
        url: '/burrow',
        templateUrl: 'views/burrow.html'
    })
});