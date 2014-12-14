angular.module('wingedwords', ['ionic', 'contenteditable', 'wingedwords.controllers', 'wingedwords.services', 'wingedwords.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.run(function ($ionicModal, $rootScope){
  $ionicModal.fromTemplateUrl('templates/poem-new.html', {
    scope: $rootScope
  }).then(function (modal) {
    $rootScope.modal = modal;
  });

  $rootScope.newPoem = function(){
    $rootScope.modal.show();
  }
  $rootScope.cancelPoem = function(){
    $rootScope.modal.hide();
  }
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })
    .state('tab.dash-detail', {
      url: '/dash/:poemId',
      views: {
        'tab-dash': {
          templateUrl: 'templates/poem-detail.html',
          controller: 'PoemDetailCtrl'
        }
      }
    })

    .state('tab.updates', {
      url: '/updates',
      views: {
        'tab-updates': {
          templateUrl: 'templates/tab-updates.html',
          controller: 'UpdatesCtrl'
        }
      }
    })
    .state('tab.updates-detail', {
      url: '/updates/:poemId',
      views: {
        'tab-updates': {
          templateUrl: 'templates/poem-detail.html',
          controller: 'PoemDetailCtrl'
        }
      }
    })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});

