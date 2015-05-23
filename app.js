angular.module('app', [
    'ncInfiniteScroll'
  ])
  .controller('AppCtrl', ['$scope', '$timeout', function($scope, $timeout) {
    var data = [{
      id: 0,
      name: 'RICHARD HENDRICKS',
      title: 'CEO/President',
      avatar: './img/richard.png',
      intro: ''
    }, {
      id: 1,
      name: 'ERLICH BACHMANN',
      title: 'Board Member',
      avatar: './img/erlich.png',
      intro: ''
    }, {
      id: 2,
      name: 'JARED (DONALD) DUNN',
      title: 'Head of Business Development',
      avatar: './img/jared.png',
      intro: ''
    }, {
      id: 3,
      name: 'DINESH CHUGTAI',
      title: 'Programmer, Co-CTO',
      avatar: './img/dinesh.png',
      intro: ''
    }, {
      id: 4,
      name: 'BERTRAM GILFOYLE',
      title: 'Systems Architect, Co-CTO',
      avatar: './img/gilfoyle.png',
      intro: ''
    }, {
      id: 5,
      name: 'CARLA WALTON',
      title: 'Platform Engineer',
      avatar: './img/carla.png',
      intro: ''
    },{
      id: 6,
      name: 'RICHARD HENDRICKS2',
      title: 'CEO/President',
      avatar: './img/richard.png',
      intro: ''
    }, {
      id: 7,
      name: 'ERLICH BACHMANN2',
      title: 'Board Member',
      avatar: './img/erlich.png',
      intro: ''
    }, {
      id: 8,
      name: 'JARED (DONALD) DUNN2',
      title: 'Head of Business Development',
      avatar: './img/jared.png',
      intro: ''
    }, {
      id: 9,
      name: 'DINESH CHUGTAI2',
      title: 'Programmer, Co-CTO',
      avatar: './img/dinesh.png',
      intro: ''
    }, {
      id: 10,
      name: 'BERTRAM GILFOYLE2',
      title: 'Systems Architect, Co-CTO',
      avatar: './img/gilfoyle.png',
      intro: ''
    }, {
      id: 11,
      name: 'CARLA WALTON2',
      title: 'Platform Engineer',
      avatar: './img/carla.png',
      intro: ''
    },{
      id: 12,
      name: 'RICHARD HENDRICKS3',
      title: 'CEO/President',
      avatar: './img/richard.png',
      intro: ''
    }, {
      id: 13,
      name: 'ERLICH BACHMANN3',
      title: 'Board Member',
      avatar: './img/erlich.png',
      intro: ''
    }, {
      id: 14,
      name: 'JARED (DONALD) DUNN3',
      title: 'Head of Business Development',
      avatar: './img/jared.png',
      intro: ''
    }, {
      id: 15,
      name: 'DINESH CHUGTAI3',
      title: 'Programmer, Co-CTO',
      avatar: './img/dinesh.png',
      intro: ''
    }, {
      id: 16,
      name: 'BERTRAM GILFOYLE3',
      title: 'Systems Architect, Co-CTO',
      avatar: './img/gilfoyle.png',
      intro: ''
    }, {
      id: 17,
      name: 'CARLA WALTON3',
      title: 'Platform Engineer',
      avatar: './img/carla.png',
      intro: ''
    }];

    $scope.data = [];

    var fetch = function(after) {
      after = after || 0;
      for(var i = after; i< after + 6; i++) {
        if (data[i]) {
          $scope.data.push(data[i]);
        }
      }
      $scope.after = $scope.data.length;
    };

    $scope.loadMore = function loadMore() {
      $scope.spinnerShow = true;
      $timeout(function() {
        console.log($scope.after);
        fetch($scope.after);
        $scope.spinnerShow = false;
      }, 1000);
    };

    $scope.loadMore();


  }]);
