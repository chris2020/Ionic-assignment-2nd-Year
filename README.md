# Mobile Application Development Project 

Project is on GitHub at https://github.com/chris2020/ionic-assignment


			Project Contents
        		================

Mobile App consists of 1 HTML file called index.html which is divided up into 3 views using tabs to select 
the view you want.

There are 2 javascript files, app.js and controllers.js

There is an image folder called img which houses the images needed for the app.

			Additional Details
			==================
app.js


app.js has the module, the configuration for the views and the run function. In the configuration function there 
is a parent state for the tabs and 3 child states for each view. $urlRouterProvider is used to set a default state.

controllers.js


There are 3 controllers in this file, one for each view in the HTML file. They all get passed 2 services to help
control data in the app, $rootScope and $scope.

index.html


Displays 3 views to users who then use tabs to navigate between them. Users can interact with each view.

In the home view there is a button to reset calorie counter to 0.

In the list view there are buttons with different values for different food which can be pressed and adds to 
the calorie counter.

In the input view, users can enter the name and calories of new food. There are 2 buttons, one adds the calorie
value to the counter and the other allows you to save new food to the list page (temporary storage currently).
********************************************************************************************************************


 			Backend Features of App
			***********************

Calorie counter value is stored in a global variable ($rootScope.dayCal) as it needs to be accessed from 3
different controllers.

Local storage is used to save calorie counter value. When app is stated up value from window.localStorage[] is 
retrieved and placed in $rootScope.dayCal.

On home page when calorie counter reaches 2000 or above a new div is displayed on top of page with a warning 
about your calorie intake (ng-show is used for this). Colour and size of number displaying calories also changes
when this 2000 is reached (ng-show again).

On list page, ng-repeat is used to diplay items in a list, this reduces amount of code needed signicantly. Ionics
class "item-thumbnail-left" is used to cleanly postion and size the images. 

The array which ng-repeat loops over contains objects. Each object has a path to an image, a name for food, and a 
value for the amount of calories that food has.

A button is also repeated in the list and has a certain value depending on the food, clicking it adds to counter
(ng-click).

In the input page there is a form with 2 labels, one allows you tp enter text and the other allows you to enter 
numbers. Each value is binded with ng-model.

You can click the 'add' button and it'll add the calories entered into the counter.

If you enter a name and number you can click the 'save to list' button and it'll add your data to the list page.
This is done buy using the push() function for the array. It has a default user image and takes the name and 
number entered by the user. It then puts these into an object and puts them into the list


			AngularJS Directives Used
			*************************

ng-app
ng-controller
ng-template
ng-show
ng-click
ng-repeat
ng-model
ng-src

			AngularJS Services Used
			************************

$scope
$rootScope
$stateProvider
$urlRouterProvider









 