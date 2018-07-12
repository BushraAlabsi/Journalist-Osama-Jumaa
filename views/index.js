
 var app =angular.module('app',["ngRoute"]) //importing ngRoute is important for the config./routeProvider.
app.config(["$routeProvider", function($routeProvider) {
    $routeProvider // render one of these html pages inside the div of ng-view depending on route provided/fgpkodfp[]
    .when("/", {
      templateUrl : 'home.html'
    })
    .when("/About", {
      templateUrl : 'about.html'
    })
    .when("/works", {
      templateUrl : 'works.html'
    })
    .when("/About/ar", {
      templateUrl : 'aboutAr.html'
    })
    .when("/Download", {
      templateUrl : 'book.html'
    })
    .when("/others", {
      templateUrl : "others.html"
    })
    .when("/festival", {
      templateUrl : "Festival.html"
    })
    .when("/works/1", {
      templateUrl : '1.html'
    }).when("/works/2", {
      templateUrl : '2.html'
    }).when("/works/3", {
      templateUrl : '3.html'
    }).when("/works/4", {
      templateUrl : '4.html'
    }).when("/works/5", {
      templateUrl : '5.html'
    })
    .when("/others/ar", {
      templateUrl : 'othersAr.html'
    })
  }])


  app.controller('myCtrl', ['$scope','$http','$window',function($scope,$http,$window){
     $scope.home = false;
     console.log("vuyj",$window.location.hash)
    if($window.location.hash == "#!/" || $window.location.hash == "#!/#myCarousel" || $window.location.hash == "") $scope.home = true;

    $scope.Eng = true; //for show and hide in the html elements.

 }])
