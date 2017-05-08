
var csApp = angular.module("csApp", [

	// Standard
	"ngRoute",

	// Controllers
	"HomeController",
	"SkullsController",
	"HistoryController",
	"ApplyController",

	// Service Providers
	"DataService"

]);

csApp.config(function($routeProvider) {

	$routeProvider
		.when("/", {
			templateUrl: "/js/views/home.html",
			controller: "HomeController"
		})
		.when("/skulls", {
			templateUrl: "/js/views/skulls.html",
			controller: "SkullsController"
		})
		.when("/history", {
			templateUrl: "/js/views/history.html",
			controller: "HistoryController"
		})
		.when("/apply", {
			templateUrl: "/js/views/apply.html",
			controller: "ApplyController"
		})
		.otherwise({
			redirect: "/"
		});


});

csApp.run(function() {

});