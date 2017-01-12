angular.module('startupsoft', ['ui.router',
    'ngProgress',
    'ngMessages',
    'ss.home',
    'ss.homeComponents',
    'ss.homeDirectives',
    'ss.about',
    'ss.faq',
    'ss.contact',
    'ss.callback',
    'ss.result',
    'ss.layout',
    'ss.common'])
    .config(['$locationProvider', '$urlRouterProvider', '$httpProvider', function ($locationProvider, $urlRouterProvider, $httpProvider) {

        console.log('from config');
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

        $urlRouterProvider.otherwise("/notfound");

    }])
    .run(['$rootScope', '$state', 'ngProgressFactory', function ($rootScope, $state, ngProgressFactory) {
        $rootScope.$state = $state;


        var progressBar = ngProgressFactory.createInstance();
        progressBar.setColor('#4094ed');

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            progressBar.start();
            $rootScope.previousState = fromState;
        });

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            progressBar.complete();
        });

    }]);
