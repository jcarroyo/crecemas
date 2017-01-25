angular.module('crecemas', ['ionic', 'crecemasCtrl'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
          .state('login',{
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'loginCtrl'
          })
          //ALUMNO
          .state('alumno', {
            url: '/alumno',
            templateUrl: 'templates/alumno.html',
            abstract: true
          })

          .state('alumno.home', {
            url: '/home',
            views: {
              'alumno-container': {
                templateUrl: 'templates/alumnoHome.html',
                controller: 'alumnoHomeCtrl'
              }
            }
          })

          //PROFESOR
          .state('profesor',{
            url: '/profesor',
            templateUrl: 'templates/profesor.html',
            abstract: true
          })

          .state('profesor.home', {
            url: '/home',
            views: {
              'profesor-container': {
                templateUrl: 'templates/profesorHome.html',
                controller: 'profesorHomeCtrl'
              }
            }
          })
      ;

      $urlRouterProvider.otherwise('/login');



});
