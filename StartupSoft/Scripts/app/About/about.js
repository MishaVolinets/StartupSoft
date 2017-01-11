(function () {
    angular.module('ss.about', [])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('about', {
                    url: '/about',
                    template: '<about-page></about-page>',
                    data: {
                        pageTitle: 'About'
                    }
                });
        }]);
})();