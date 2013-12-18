require([], function(a,b) {

	var app = angular.module('app',['ngRoute']);

	//Esto esta aca porque este .js se carga en forma asincronica
	angular.element(document).ready(function() {
     	angular.bootstrap(document, ['app']);
   	});

	app.config(['$routeProvider',function($routeProvider) {
		$routeProvider.
                when('/', {templateUrl: 'partial/main.html',   controller: 'MainCtrl'}).
                when('/code', {templateUrl: 'partial/code.html'}).
                otherwise({redirectTo: '/'});
	}]);

	app.controller("MainCtrl", function($scope) {
		$scope.options = [{
			caption: 'Por codigo',
			url: 'code'
		},{
			caption: 'Por titulo',
			url: 'title'
		},{
			caption: 'Mapa',
			url: 'map'
		}];
	});

	
});