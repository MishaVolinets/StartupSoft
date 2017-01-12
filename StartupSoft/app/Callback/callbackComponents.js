(function () {

    function callbackStepCtrl() {
        var vm = this;

        vm.emailModel = {};

        vm.emailModel.fromApply = true;

    }

    angular.module('startupsoft')
        .component('callbackPage', {
            templateUrl: '/app/Callback/views/callbackPage.html'
        })
        .component('firstStep', {
            templateUrl: '/app/Callback/views/firstStep.html',
            controller: callbackStepCtrl
        })
        .component('secondStep', {
            templateUrl: '/app/Callback/views/secondStep.html',
            controller: callbackStepCtrl
        });

})();