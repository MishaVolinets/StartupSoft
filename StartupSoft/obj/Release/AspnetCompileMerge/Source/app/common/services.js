(function () {

    function emailService($http){
        var factory = {};

        factory.sendEmail = function (emailModel) {
            return $http.post("/email/send",emailModel);
        }
       
        return factory;
    }

    emailService.$inject = ['$http'];

    angular.module('ss.common')
        .factory('emailService',emailService);

})();