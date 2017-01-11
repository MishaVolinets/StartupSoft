angular.module('startupsoft', ['ui.router',
    'ss.home',
    'ss.homeComponents',
    'ss.homeDirectives',
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
    .run(['$rootScope', '$state', function ($rootScope, $state) {
        $rootScope.$state = $state;
    }]);
