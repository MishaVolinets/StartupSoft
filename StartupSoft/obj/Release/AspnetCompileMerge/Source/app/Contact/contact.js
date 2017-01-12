(function () {
    
    angular.module('ss.contact', [])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider.state('contact', {
                url: '/contact',
                template: '<contact-page></contact-page>',
                data: {
                    pageTitle: 'Contact us'
                }
            });
        }]);
})();