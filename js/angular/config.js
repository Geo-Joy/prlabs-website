app.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
    // $locationProvider.hashPrefix(''); // by default '!'
  // $locationProvider.html5Mode(true);
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
    .state('designer', {
        url: '/designer',
        templateUrl: 'views/designer.html'
    })
    .state('ui-ux-designer', {
        url: '/ui-ux-designer',
        templateUrl: 'views/UI-UX-designer.html'
    })
    .state('editor', {
        url: '/editor',
        templateUrl: 'views/editor.html'
    })
    .state('mean-stack-developer', {
        url: '/mean-stack-developer',
        templateUrl: 'views/mean-stack-developer.html'
    })
    .state('content-writer', {
        url: '/content-writer',
        templateUrl: 'views/content-writer.html'
    })
    .state('animator', {
        url: '/animator',
        templateUrl: 'views/animator.html'
    })
   
    
});