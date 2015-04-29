//Controller is used for adding up calories from list page
//$rootScope is passed in as global variable as it keeps track of overall calorie intake 
christyApp.controller('dailyCalories', function($rootScope, $scope){
    
    //At start up retrieve previous information about calories and store in $rrotScope.dayCal
    //Must parse the local storage to in int or counting won't work
    $rootScope.dayCal =  parseInt(window.localStorage['name']);
    
    //Make sure some number for counted calories can be viewed
    if($rootScope.dayCal == null)
    {
       //if $rootScope has no value, assign it 0
       $rootScope.dayCal = 0;
         
    }//End if
    
   //Array of objects which can be viewed from the list page. Consists of picture of food, name of food and the amount of calories in that food
   $rootScope.items = [{thumbnail: "img/egg.jpg", text: "Boiled Egg", value: 80}, {thumbnail: "img/brownBread.jpg",text: "Brown Bread", value: 100}, {thumbnail: "img/banana.jpg",text: "Banana", value: 90},                            {thumbnail: "img/apple.jpg",text: "Apple", value: 50}, {thumbnail: "img/potato.jpg",text: "Potato", value: 110}, {thumbnail: "img/carrot.jpg",text: "Carrot", value: 50}];
    
    //This function adds the value of a particular food when button in list page is clicked to the overall calorie counter $rootScope.dayCal
    //The value from the object is passed in and called digit
    $scope.addCal = function(digit){
        
        //Add value of food to the the overall calorie counter
        $rootScope.dayCal += digit;
        
        console.log($rootScope.dayCal);
        
        window.localStorage['name'] =  $rootScope.dayCal;
         
    }//End addCal
    
    //Function to reset calorie counter to 0 when reset button is pushed
    $scope.reset = function(){
    
        //Global variable reset to 0
        $rootScope.dayCal = 0;
        
        window.localStorage['name'] =  $rootScope.dayCal;
    
    }//End reset function
       
});//End controller dailyCalories

//This controller is used for the input view
christyApp.controller('inputCtrl', function($rootScope, $scope){
    
    //This function adds what the user manually enters to the $rootScope whichis tracking calorie intake 
    $scope.addInput = function(manualCal){
    
        //Add user input overall calorie intake
        $rootScope.dayCal += manualCal;
        
        window.localStorage['name'] =  $rootScope.dayCal;
        
    };//end function addInput
    
    $scope.pushToArray = function(manualCal, foodName){
    
        if(manualCal != null && foodName != null)
        {
        
            $rootScope.items.push({thumbnail: "img/carrot.jpg",text: foodName, value: manualCal});
        
        }
        else
        {
            console.log("Error pushing");
        }
        
    };//end function addInput

});//End controller inputCtrl