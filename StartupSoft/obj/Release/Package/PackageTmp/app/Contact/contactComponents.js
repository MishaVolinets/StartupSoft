(function () {

    function contactBodyCtrl($state,emailService) {
        var vm = this;

        vm.emailModel = {};

        vm.emailModel.fromApply = false;

        vm.isSendClicked = false;
        vm.requestSended = false;

        vm.sendEmail = function (valid) {
            vm.isSendClicked = true;

            if(valid)
            {
                vm.requestSended = true;
                emailService.sendEmail(vm.emailModel)
                    .then(function () {
                        vm.requestSended = false;
                        $state.go('result');
                    }, function () {
                        vm.requestSended = false;
                    });
            }
        }
    }

    contactBodyCtrl.$inject = ['$state','emailService'];

    angular.module('startupsoft')
        .component('contactPage', {
            templateUrl: '/app/Contact/views/contactPage.html'
        })
        .component('contactBody', {
            templateUrl: '/app/Contact/views/contactBody.html',
            controller: contactBodyCtrl
        });
})();