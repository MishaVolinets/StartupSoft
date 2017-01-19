(function () {
    'use strict'

    function elastic($timeout) {
        return {
            restrict: 'A',
            link: function ($scope, element) {
                $scope.initialHeight = $scope.initialHeight || element[0].style.height;
                var resize = function () {
                    element[0].style.height = $scope.initialHeight;
                    element[0].style.height = "" + element[0].scrollHeight + "px";
                };
                element.on("input change", resize);
                $timeout(resize, 0);
            }
        };
    }

    function counter() {
        return {
            restrict: 'A',
            link: function (scope, elem) {
                var maxLength = 1000;
                var textArea = elem.find('textarea');
                var counter = elem.find('#counter');
                textArea.on('input propertychange', function (e) {
                    var text = textArea[0].value;
                    var availableLength = maxLength - text.length;
                    if (availableLength >= 0) {
                        counter.text(availableLength);
                    }
                });

            }
        }
    }

    function focus($timeout){
        return {
            restrict: 'A',
            link : function($scope, $element) {
                $timeout(function() {
                    $element[0].focus();
                });
            }
        }
    }

    function ssPoint($timeout) {
        
        return {
            restict: 'A',
            link: function (scope, elem, attrs) {
                $timeout(function () {
                    var windowHeight = window.innerHeight;

                    console.log('window-height/2', windowHeight / 2);



                    var ssPoint = elem.find('.step-blue-indicator')[0];
                    console.log('numbers-step-offset: ', $(ssPoint).offset().top);

                    var scrollFunc = function () {
                        var windowTop = $(window).scrollTop();
                        console.log('window-top: ', windowTop);
                        console.log('window-top + window-height/2: ', windowTop + windowHeight / 2);

                        if (windowTop + windowHeight / 3 >= $(ssPoint).offset().top - 150 && windowTop + windowHeight / 3 <= $(ssPoint).offset().top + 150) {

                            $(ssPoint).addClass('active');
                        } else {
                            $(ssPoint).removeClass('active');
                        }
                    };

                    $(window).bind('scroll', scrollFunc);

                    scope.$on('$destroy', function () {
                        $(window).unbind('scroll');
                    });
                });
               

                //$(window).on('scroll',function () {
                //    var windowTop = $(window).scrollTop() + window.innerHeight/2,
                //        elemTop = $(elem).offset();
                //    if (windowTop >= elemTop.top) {
                //        elem.addClass('active');
                //        debugger;
                //    }
                //})
            }
        }

    }

    focus.$inject = ['$timeout'];
    elastic.$inject = ["$timeout"];
    ssPoint.$inject = ["$timeout"];

    angular.module('ss.common')
        .directive('elastic', elastic)
        .directive('counter', counter)
        .directive('focus', focus)
        .directive('ssPoint', ssPoint);


})();