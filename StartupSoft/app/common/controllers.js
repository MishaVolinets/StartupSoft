(function () {

    function bodyController($state) {
        var vm = this;
        
        console.log($state);
    }

    bodyController.$inject = ['$state'];

    angular.module('ss.common', [])
        .controller('bodyCtrl',bodyController);
})();