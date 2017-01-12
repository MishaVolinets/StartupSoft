(function () {
    

    angular.module('startupsoft')
        .component('aboutPage', {
            templateUrl: '/app/About/views/aboutPage.html'
        })
        .component('aboutHeader', {
            templateUrl: '/app/About/views/aboutHeader.html'
        })
        .component('aboutBody', {
            templateUrl: '/app/About/views/aboutBody.html'
        });
})();