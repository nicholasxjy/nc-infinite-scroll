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
        var $body = $document.find('body');
        var $$window = angular.element($window);
        var elem = ele[0];

        var innerHeight = window.innerHeight;


        // console.log(innerHeight);


        $$window.on('scroll', function() {
          //calculate condition to trigger loadmore function
          var rect = elem.getBoundingClientRect();

          var needHeight = elem.offsetTop + rect.height;

          var scrollHeight = window.scrollY + innerHeight;

          // console.log(needHeight);
          // console.log(scrollHeight);

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
