(function () {

    angular.module('ss.callback', ['callback.service'])
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