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

    focus.$inject = ['$timeout'];
    elastic.$inject = ["$timeout"];

    angular.module('ss.common')
        .directive('elastic', elastic)
        .directive('counter', counter)
        .directive('focus',focus);

})();