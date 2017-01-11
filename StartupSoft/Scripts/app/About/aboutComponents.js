(function () {
    

    angular.module('startupsoft')
        .component('aboutPage', {
            templateUrl: '/about'
        })
        .component('aboutHeader', {
            templateUrl: '/Scripts/app/About/views/aboutHeader.html'
        })
        .component('aboutBody', {
            templateUrl: '/Scripts/app/About/views/aboutBody.html'
        });
})();