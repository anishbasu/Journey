var journey = angular.module('journey', ['contenteditable','ngSanitize'])

journey.controller('mainCtrl', ['$scope', function($scope) {
    $scope.post_title = "Hello!"
    $scope.txt="Type some stuff out?"
    $scope.posts_n = 0//localStorage.getItem("posts_n")!=null?parseInt(Integer.localStorage.getItem("posts_n")):0;
    $scope.posts = new Array()//localStorage.getItem("post")!=null?JSON.parse(localStorage.get("post")):new Array();
    $scope.submitPost = function () {
      sub_post = {id: $scope.posts_n, title: $scope.post_title, date: new Date().toDateString(), txt:$scope.txt}
      $scope.post_title = ""
      $scope.posts_n = $scope.posts_n+1;
      $scope.txt = "";
      $scope.posts.push(sub_post)
      
    }

    $scope.deletePost = function(id) {
      var n = -1
      for (var i = $scope.posts.length - 1; i >= 0; i--) {
        if($scope.posts[i].id == id){
          n = i
          break
        }
      }
      if (n != -1){
        $scope.posts.splice(n,1)
      }
      //save()
    }

    function save () {
     localStorage.setItem("posts_n", $scope.posts_n)
     localStorage.setItem("posts", JSON.stringify($scope.posts))
    }
}])