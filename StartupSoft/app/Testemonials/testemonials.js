(function () {
  angular.module('ss.testemonials', [])
      .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('testemonials', {
              url: '/testimonials',
              template: '<testemonials-page></testemonials-page>',
              data: {
                pageTitle: 'Testemonials'
              }
            });
      }]);
})();