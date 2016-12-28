angular.module('startupsoft', [
    'ui.router',
    'commonControllers',
    'ss.layout'])
    .config(['$locationProvider','$stateProvider', function ($locationProvider,$stateProvider) {

        $stateProvider.state('home', {
            url: '/',
            templateUrl: '/Views/Templates/index.html',
            data: {
                pageTitle: 'Startup Soft'
            }
        });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

    }]);
