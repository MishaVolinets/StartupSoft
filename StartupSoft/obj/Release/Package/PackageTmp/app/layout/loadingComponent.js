(function () {
    'use strict'

    function loadingController($rootScope) {
        var vm = this;

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            alert('state change start');
        });
    }

    loadingController.$inject = ['$rootScope'];

    angular.module('ss.layout')
        .component('loadingComponent', {
            templateUrl: "/app/layout/loadingComponent.html",
            controller: loadingController
        });
})();