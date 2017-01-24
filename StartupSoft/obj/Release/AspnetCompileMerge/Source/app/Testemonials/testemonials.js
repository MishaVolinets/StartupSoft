(function () {
  angular.module('ss.testemonials', [])
      .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('testemonials', {
              url: '/testemonials',
              template: '<testemonials-page></testemonials-page>',
              data: {
                pageTitle: 'Testemonials'
              }
            });
      }]);
})();