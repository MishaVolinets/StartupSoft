(function () {

    function networkBody($window) {
        var vm = this;

        vm.goTo = function (url) {
            $window.open(url);
        }
    }

    networkBody.$inject = ['$window'];

  angular.module('startupsoft')
    .component('networkPage', {
      templateUrl: '/app/Network/views/networkPage.html'
    })
    .component('networkHeader', {
      templateUrl: '/app/Network/views/networkHeader.html'
    })
    .component('networkBody', {
        templateUrl: '/app/Network/views/networkBody.html',
        controller: networkBody
    });

})();