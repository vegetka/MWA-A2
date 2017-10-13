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
    $scope.title = "Do not push the putton";
    $scope.body  = "Welcome";
    $scope.list  = "List";
    $scope.item  = "one";
    $scope.button = "Hello";
}

function FAQcontroller($scope){
    $scope.title = "this is the FAQ";
    $scope.body  = "Fequently Asked Questions";
}

function Clicker($scope){
    $scope.item.push("two");
}
