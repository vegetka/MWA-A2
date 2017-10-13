// App configuration
angular.module('mwaa2', ['ngRoute']).
    config(function($routeProvider){
        $routeProvider.
            when('/', {templateUrl:'partials/home.html', controller:HomeController}).
            when('/faq', {templateUrl:'partials/faq.html', controller:FAQcontroller}).
            otherwise({redirectTo:'/', templateUrl:'partials/home.html'})
});

// Main controller
function HomeController($scope){
    // debug
    l("HomeController started");
    // Page elements content
    $scope.header    = "Arkadiusz Maciak";
    $scope.title     = "Mobile & Web Applications";
    $scope.inputInfo = "Type something into empty box, press 'Enter' or click 'Add' button to confirm";
    $scope.listInfo  = "List will show below (press X to delete item)";
    $scope.item      = [];
    $scope.button    = "Add";
    $scope.footer    = "(c) 2017 Arkadiusz Maciak for Mobile & Web Applications Assessment 2"
    // add new element to the list
    $scope.addElement = function(){
        // debug
        l($scope.newItem);
        // get text from input box, add item to the list
        $scope.item.push({'new': $scope.newItem, 'done':false});
        // clear input field
        $scope.newItem = "";
    }
    // remove element from the list
    $scope.removeElement = function(index){
        $scope.item.splice(index, 1);
    };
}

function FAQcontroller($scope){
    $scope.title = "this is the FAQ";
    $scope.body  = "Fequently Asked Questions";
}

// debugger
function l(s){ console.log(s); }
