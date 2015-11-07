angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {

  $scope.justUploaded;

  $scope.createLink = function () {
    Links.createLink($scope.url)
      .then(function (link) {
        //render
        console.log(link);
        $scope.justUploaded = link;
      });
  };

});
