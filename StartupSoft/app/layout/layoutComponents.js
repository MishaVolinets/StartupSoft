(function () {
    'use strict'

    function navbartopController($window,$state) {
        var vm = this;

        vm.currentState = $state.current.name;

        vm.goTo = function (to) {
            $window.open(to);
        }
    }

    navbartopController.$inject = ['$window','$state'];

    angular.module('ss.layout')
        .component('navbartop', {
            templateUrl: '/app/layout/_navbarTop.html',
            controller: navbartopController
        });
})();