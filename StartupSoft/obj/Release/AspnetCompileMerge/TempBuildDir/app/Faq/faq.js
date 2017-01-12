(function () {

    angular.module('ss.faq', [])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider.state('faq', {
                url: '/faq',
                template: '<faq-page></faq-page>',
                data: {
                    pageTitle: 'Faq'
                }
            });
        }])
})();