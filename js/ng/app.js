/*global angular */

'use strict';

angular.module('erocciApp', [
    'erocciApp.services',
    'erocciApp.controllers',
    'erocciApp.directives',
    'erocciApp.utils',
    'ngResource',
    'ui.router'
])
    .config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/main');

	$stateProvider
	    .state('main', {
		url: '/main',
		templateUrl: 'partials/main.html'
	    });
    });
