
var csApp = angular.module("csApp", [

	// Standard
	"ngRoute",

	// Controllers
	"HomeController",
	"SkullsController",
	"HistoryController",
	"ApplyController",
	"MasterController",

	// Service Providers
	"DataService",
]);

csApp.config(function($routeProvider) {

	var base = "";

	if(window.location.href.includes("github")) {
		base = "/website";
	}

	$routeProvider
		.when(base + "/", {
			templateUrl: "js/views/home.html",
			controller: "HomeController"
		})
		.when(base + "/skulls", {
			templateUrl: "js/views/skulls.html",
			controller: "SkullsController"
		})
		.when(base + "/history", {
			templateUrl: "js/views/history.html",
			controller: "HistoryController"
		})
		.when(base + "/apply", {
			templateUrl: "js/views/apply.html",
			controller: "ApplyController"
		})
		.otherwise({
			redirect: base + "/"
		});


});

csApp.run(function($rootScope) {

	$rootScope.title = null;

});