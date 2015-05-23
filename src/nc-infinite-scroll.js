var m = angular.module('ncInfiniteScroll', []);

m.directive('ncInfiniteScroll', [
  '$rootScope',
  '$timeout',
  '$window',
  '$document',
  function($rootScope, $timeout, $window, $document) {
    return {
      restrict: 'AE',
      scope: {
        loadMore: '&',
        container: '=',
        item: '='
      },
      link: function(scope, ele, attrs) {
        var $$window = angular.element($window);
        var elem = ele[0];
        $$window.on('scroll', function() {
          //calculate condition to trigger loadmore function
          var rect = elem.getBoundingClientRect();
          var needHeight = elem.offsetTop + rect.height;
          var innerHeight = window.innerHeight;
          var scrollHeight = window.scrollY + innerHeight;
          if (scrollHeight >= needHeight) {
            if (scope.$$phase || $rootScope.$$phase) {
              scope.loadMore();
            } else {
              scope.$apply(scope.loadMore());
            }
          }
        });

      }
    };
  }
]);
