var journey = angular.module('journey', ['contenteditable','ngSanitize'])

journey.controller('mainCtrl', ['$scope', function($scope) {
    $scope.txt="Type some stuff out!"
    $scope.posts_n = 0//localStorage.getItem("posts_n")!=null?localStorage.getItem("posts_n"):0;
    $scope.posts = new Array()//localStorage.getItem("post")!=null?JSON.parse(localStorage.get("post")):new Array();
    $scope.submitPost = function () {
      sub_post = {id: $scope.posts_n, date: new Date().toDateString(), txt:$scope.txt}
      $scope.posts.push(sub_post)
      $scope.posts_n = $scope.posts_n++;
      $scope.txt = "";
    }

    
}])