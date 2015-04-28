//storing in variable for better readability
var christyApp = angular.module('calorific', ['ionic']);

christyApp.controller('dailyCalories', function($scope){

    $scope.dayCal = 100;

});

christyApp.config(function($stateProvider, $urlRouterProvider) 
{
    
          $stateProvider
          
          .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: "tabs.html"
          })
          
          .state('tab.home', {
            url: '/home',
            views: {
              'home': {
                templateUrl: 'home.html',
                controller: 'dailyCalories'
              }
            }
          })
          
          .state('tab.list', {
            url: '/list',
            views: {
              'list': {
                templateUrl: 'list.html',
                controller: 'dailyCalories'
              }
            }
          })
          
          .state('tab.input', {
            url: '/input',
            views: {
              'input': {
                templateUrl: 'input.html',
                controller: 'dailyCalories'
              }
            }
          });
    
          $urlRouterProvider.otherwise('/tab/home');

});
          
          
          

christyApp.run(function($ionicPlatform) 
{
    
  $ionicPlatform.ready(function() 
  {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) 
    {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
      
    if(window.StatusBar)
    {
      StatusBar.styleDefault();
    }
      
  });
    
});
