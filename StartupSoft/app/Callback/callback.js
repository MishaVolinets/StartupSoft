(function () {

    angular.module('ss.callback', [])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider.state('callback', {
                url: '/callback',
                template: '<callback-page></callback-page>',
                data: {
                    pageTitle: 'Callback'
                }
            });
        }]);

})();