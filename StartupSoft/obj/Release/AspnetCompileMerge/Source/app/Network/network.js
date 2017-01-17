(function () {

  angular.module('ss.network', [])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider.state('network',{
        url: '/network',
        template: '<network-page></network-page>',
        data: {
          pageTitle: 'Our network'
        }
      });
    }]);

})();