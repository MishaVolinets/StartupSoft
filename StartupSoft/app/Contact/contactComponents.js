(function () {

    function contactBodyCtrl(emailService) {
        var vm = this;

        vm.emailModel = {};

        vm.emailModel.fromApply = false;

        vm.sendEmail = function (valid) {
            if(valid)
            {
                emailService.sendEmail(vm.emailModel);
            }
        }
    }

    contactBodyCtrl.$inject = ['emailService'];

    angular.module('startupsoft')
        .component('contactPage', {
            templateUrl: '/app/Contact/views/contactPage.html'
        })
        .component('contactBody', {
            templateUrl: '/app/Contact/views/contactBody.html',
            controller: contactBodyCtrl
        });
})();