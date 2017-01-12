(function () {

    function callbackPageCtrl(){
        var vm = this;

        vm.currentStep = 1;
    }

    function callbackStepCtrl($rootScope, $state, callbackService, emailService) {
        var vm = this;

        vm.service = callbackService;

        vm.goToNextStep = function (valid, step) {
            if (valid) {
                vm.currentStep = step;
            }
        }

        vm.back = function () {
            vm.service.emailModel = {};
            if ($rootScope.previousState)
                $state.go($rootScope.previousState.name);
            else
                $state.go('home');
        }

        vm.sendEmail = function (valid) {
            if (valid) {
                vm.service.emailModel.fromApply = true;
                emailService.sendEmail(vm.service.emailModel)
                    .then(function () {
                        vm.service.emailModel = {};
                        $state.go('result');
                    });
            }
        }

    }

    callbackStepCtrl.$inject = ['$rootScope', '$state', 'callbackService', 'emailService'];

    angular.module('startupsoft')
        .component('callbackPage', {
            templateUrl: '/app/Callback/views/callbackPage.html',
            controller: callbackPageCtrl
        })
        .component('firstStep', {
            templateUrl: '/app/Callback/views/firstStep.html',
            controller: callbackStepCtrl,
            bindings: {
                currentStep: '='
            }
        })
        .component('secondStep', {
            templateUrl: '/app/Callback/views/secondStep.html',
            controller: callbackStepCtrl,
            bindings: {
                currentStep: '='
            }
        });

})();