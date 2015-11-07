angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.links = [];

  $scope.getLinks = function () {
    Links.getLinks().then(function (links) {
      $scope.links = links;
    });
  };
  // $scope.links = [
  //   {
  //     visits: 5,
  //     title: 'fhdjsjh',
  //     url: 'hfjkadhfjdk',
  //     base_url: 'fjhdah',
  //     code: 'fjdskj'
  //   },
  //   {
  //     visits: 4,
  //     title: 'jsjh',
  //     url: 'jk',
  //     base_url: 'dah',
  //     code: 'dskj'
  //   }
  // ];
});
