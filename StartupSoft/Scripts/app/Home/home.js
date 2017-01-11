(function () {
    angular.module('ss.home', [])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider.state('home', {
                url: '/',
                templateUrl: '/Home/Index',
                data: {
                    pageTitle: 'StartupSoft'
                }
            });
        }])

})();