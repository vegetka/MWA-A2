angular.module('myModule', ['ngRoute']).
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
    $scope.item  = "one";
    $scope.button = "Click";
    $scope.AddElement = function(){
        $scope.item = ("two"); // = "two";
    }
}

function FAQcontroller($scope){
    $scope.title = "this is the FAQ";
    $scope.body  = "Fequently Asked Questions";
}

function Clicker($scope){
    $scope.item = "two";
    console.log("inside clicker");
}
