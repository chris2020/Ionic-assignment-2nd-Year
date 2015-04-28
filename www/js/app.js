//storing in variable for better readability
var christyApp = angular.module('calorific', ['ionic']);

christyApp.controller('dailyCalories', function($scope){

    $scope.dayCal = 100;

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
