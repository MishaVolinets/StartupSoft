//by Misha Volinets
(function () {
    
    function bodyCtrl($state) {
        var vm = this;
        vm.state = $state;
        console.log(vm.state);
    }

    bodyCtrl.$inject = ['$state'];

    angular
        .module('commonControllers',[])
        .controller('bodyCtrl',bodyCtrl);

})();