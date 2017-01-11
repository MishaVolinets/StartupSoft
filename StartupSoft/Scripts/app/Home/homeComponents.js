(function () {
    'use strict'

    function homeController($timeout,ngProgressFactory) {
        var vm = this;

        //vm.progressBar = ngProgressFactory.createInstance();
        //vm.progressBar.setColor('#4094ed');
        //vm.progressBar.start();
        //$timeout(function () {
        //    vm.progressBar.complete();
        //});
    }

    homeController.$inject = ['$timeout', 'ngProgressFactory'];

    angular.module('ss.homeComponents', [])
        .component('homePage', {
            templateUrl: '/Home/Index',
            controller: homeController
        })
        .component('homeBody', {
            templateUrl: '/Scripts/app/Home/views/homeBody.html'
        })
        .component('homeHeader', {
            templateUrl: '/Scripts/app/Home/views/homeHeader.html'
        });

})();