(function () {
    'use strict'

    function navbartopController($window) {
        var vm = this;

        vm.goTo = function (to) {
            $window.open(to);
        }
    }

    navbartopController.$inject = ['$window'];

    angular.module('ss.layout')
        .component('navbartop', {
            templateUrl: '/Scripts/app/layout/_navbarTop.html',
            controller: navbartopController
        });
})();