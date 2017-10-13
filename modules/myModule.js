angular.module('myModule', ['ngRoute']).
    config(function($routeProvider){
        $routeProvider.
            when('/', {templateUrl:'partials/basic-template.html', controller:Basicontroller}).
            when('/faq', {templateUrl:'partials/faq.html', controller:FAQcontroller}).
            otherwise({redirectTo:'/', templateUrl:'partials/basic-template.html'})
    });

function MainController($scope){
    
}

function Basicontroller($scope){
    $scope.title = "this is the title ofc";
    $scope.body  = "Welcome";
    $scope.list  = "Lista";
}

function FAQcontroller($scope){
    $scope.title = "this is the FAQ";
    $scope.body  = "Fequently Asked Questions";
}