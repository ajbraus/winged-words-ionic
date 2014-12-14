angular.module('wingedwords.controllers', [])

.controller('DashCtrl', function ($scope, Poem) {
  $scope.poems = Poem.all();
})

.controller('NewPoemCtrl', function ($rootScope, $scope, Poem) {
  $scope.poem = {};

  $scope.createPoem = function() {
    Poem.save({}, $scope.poem,
      function (data) {

      }, function (data) {

      }
    );
  }
})

.controller('PoemDetailCtrl', function ($scope, $stateParams, Poem) {
  $scope.poem = Poem.get($stateParams.poemId);
})

.controller('UpdatesCtrl', function ($scope, Update) {
  $scope.updates = Update.all();
})

.controller('AccountCtrl', function ($scope, User) {
  $scope.user = {}
})

.controller('UserDetailsCtrl', function ($scope, $stateParams, User) {
  $scope.user = User.get($stateParams.userId)
});
