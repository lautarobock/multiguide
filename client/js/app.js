(function() {

	var app = angular.module('app',['ngRoute']);

	app.config(['$routeProvider',function($routeProvider) {
		$routeProvider.
                when('/', {templateUrl: 'partial/main.html',   controller: 'MainCtrl'}).
                otherwise({redirectTo: '/'});
	}]);

	app.controller("MainCtrl", function($scope) {
		$scope.options = [{
			caption: 'Por codigo'
		},{
			caption: 'Por titulo'
		},{
			caption: 'Mapa'
		}];
	});
})();