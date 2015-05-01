angular.module('journey', ['contenteditable'])
  .controller('mainCtrl', ['$scope', function($scope) {
    $scope.txt="Type some stuff out!"
  }])