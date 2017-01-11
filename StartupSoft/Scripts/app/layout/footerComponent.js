(function () {
    'use strict'
    function footerController(){
        var vm = this;
    }

    angular.module('ss.layout',[])
        .component('footerComponent', {
            templateUrl: '/Scripts/app/layout/footer.html',
            controller: footerController
        });
})();