(function () {
    'use strict'


    function homeHeaderController($window){
        var vm = this;

        vm.goTo = function (url) {
            $window.open(url);
        }
    }

    homeHeaderController.$inject = ['$window'];

    angular.module('ss.homeComponents', [])
        .component('homePage', {
            templateUrl: '/app/Home/views/homePage.html'
        })
        .component('homeBody', {
            templateUrl: '/app/Home/views/homeBody.html'
        })
        .component('homeHeader', {
            templateUrl: '/app/Home/views/homeHeader.html',
            controller: homeHeaderController
        });

})();