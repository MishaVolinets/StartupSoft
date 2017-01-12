(function () {

    function callbackService($http) {
        var factory = {};
        //for APPLY
        factory.eventModel = {};
        //
        factory.currentStep = 1;

        factory.changeStep = function (step) {
            factory.currentStep = step;
        }
        
        return factory;
    }

    callbackService.$inject = ['$http'];

    angular.module('callback.service',[])
        .factory('callbackService',callbackService);

})();