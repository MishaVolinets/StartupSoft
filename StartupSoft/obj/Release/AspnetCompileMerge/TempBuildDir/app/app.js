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
    'ss.network',
    'ss.testemonials',
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
    .run(['$rootScope', '$state','$timeout','$location', 'ngProgressFactory', function ($rootScope, $state, $timeout,$location, ngProgressFactory) {
        $rootScope.$state = $state;


        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                debugger;
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date(); a = s.createElement(o),
            m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-89198032-1', 'auto');

        var progressBar = ngProgressFactory.createInstance();
        progressBar.setColor('#4094ed');

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            progressBar.start();
            $rootScope.previousState = fromState;
        });

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $timeout(function () {
                progressBar.complete();
            });
            var location = $location.url();
            debugger;
            ga('set', 'page',location);
            ga('send', 'pageview');

        });

    }]);
