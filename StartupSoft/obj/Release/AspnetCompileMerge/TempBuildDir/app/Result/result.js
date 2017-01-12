(function () {

    angular.module('ss.result', [])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider.state('result', {
                url: '/result',
                template: '<result-page></result-page>',
                data: {
                    pageTitle: 'Success'
                }
            });
        }]);
})();