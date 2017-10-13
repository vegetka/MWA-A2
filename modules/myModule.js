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
    $scope.title = "this is the title ofc";
    $scope.body  = "Welcome";
    $scope.list  = "List";
}

function FAQcontroller($scope){
    $scope.title = "this is the FAQ";
    $scope.body  = "Fequently Asked Questions";
}