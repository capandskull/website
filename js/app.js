var csApp = angular.module("csApp", [
  // Standard
  "ngRoute",
  // Controllers
  "ApplyController",
  "EventsController",
  "HomeController",
  "HistoryController",
  "MasterController",
  "SkullsController",
  // Service Providers
  "DataService",
]);

csApp.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "js/views/home.html",
      controller: "HomeController"
    })
    .when("/skulls", {
      templateUrl: "js/views/skulls.html",
      controller: "SkullsController"
    })
    .when("/history", {
      templateUrl: "js/views/history.html",
      controller: "HistoryController"
    })
    .when("/events", {
      templateUrl: "js/views/events.html",
      controller: "EventsController",
    })
    .when("/apply", {
      //templateUrl: "js/views/apply.html",
      templateUrl: "js/views/hale.html",
      controller: "ApplyController"
    })
    .otherwise({
      redirect: "/"
    });
});

csApp.run(function($rootScope) {
  $rootScope.title = null;
  $rootScope.url = window.location.href.split("#!");
  console.log($rootScope.url);
});
