angular.module('mwaa2', ['ngMaterial']);

angular.module('mwaa2', ['ngRoute']).
    config(function($routeProvider){
        $routeProvider.
            when('/', {templateUrl:'partials/home.html', controller:HomeController}).
            when('/faq', {templateUrl:'partials/faq.html', controller:FAQcontroller}).
            otherwise({redirectTo:'/', templateUrl:'partials/basic-template.html'})
    });

function MainController($scope){
    
}

function HomeController($scope){
    // debug
    l("inside HomeController");
    $scope.title = "Do not push the putton";
    $scope.body  = "Welcome";
    $scope.listInfo = "List will show below (press X to delete item)";
    $scope.item  = [];
    $scope.button = "Add";
    // add new element to the list
    $scope.addElement = function(){
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
function l(s){
    console.log(s);
}
