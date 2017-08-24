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
    // .state('service', {
    //     url: '/service',
    //     templateUrl: 'views/service.html'
    // })
    // .state('products', {
    //     url: '/products',
    //     templateUrl: 'views/product.html'
    // })
    // .state('portfolio', {
    //     url: '/portfolio',
    //     templateUrl: 'views/portfolio.html'
    // })
    // .state('contact', {
    //     url: '/contact',
    //     templateUrl: 'views/contact.html'
    // });
});