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
    console.log("inside HomeController");
    $scope.title = "Do not push the putton";
    $scope.body  = "Welcome";
    $scope.list  = "List";
    $scope.item  = [];
    $scope.button = "Add";
    $scope.addElement = function(){
        $scope.item.push({'new': $scope.newItem, 'done':false});
    }
    $scope.removeElement = function(index){
        $scope.item.splice(index, 1);
    };
}

function FAQcontroller($scope){
    $scope.title = "this is the FAQ";
    $scope.body  = "Fequently Asked Questions";
}

function Clicker($scope){
    $scope.item = "two";
    console.log("inside clicker");
}
