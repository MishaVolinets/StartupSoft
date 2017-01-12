(function () {

    function contactBodyCtrl($state,emailService) {
        var vm = this;

        vm.emailModel = {};

        vm.emailModel.fromApply = false;

        vm.sendEmail = function (valid) {
            if(valid)
            {
                emailService.sendEmail(vm.emailModel)
                    .then(function () {
                        $state.go('result');
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