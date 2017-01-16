(function () {
    function navbarScroll() {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                
                elem.addClass('white-navbar-display-none');
                $SecondMenu = $('#SecondPageMenu');
                $(window).scroll(function () {
                    var scrollPosition = $(this).scrollTop();

                    if (scrollPosition > 150) {
                        elem.removeClass('white-navbar-display-none').addClass('white-navbar-display');
                        $SecondMenu.removeClass('white-navbar-second-page').addClass('white-navbar-display-fixed');
                    } else if (scrollPosition < 150) {
                        elem.removeClass('white-navbar-display').addClass('white-navbar-display-none');
                        $SecondMenu.removeClass('white-navbar-display-fixed').addClass('white-navbar-second-page');
                    }
                });
            }
        }
    }

    angular.module('ss.homeDirectives', [])
        .directive('navbarScroll', navbarScroll);
})();