/*global angular */

'use strict';

angular.module('erocciApp', [
    'erocciApp.services',
    'erocciApp.controllers',
    'erocciApp.directives',
    'erocciApp.utils',
    'hljs',
    'ngResource',
    //'duScroll',
    'ui.router'
])
    .config(['$stateProvider', '$urlRouterProvider',
	     function($stateProvider, $urlRouterProvider) {
		 $urlRouterProvider.otherwise('/main');

		 $stateProvider
		     .state('main', {
			 url: '/main',
			 templateUrl: 'partials/main.html',
			 data: { pageTitle: 'Home' }
		     })
		     .state('download', {
			 url: '/download',
			 templateUrl: 'partials/download.html',
			 data: { pageTitle: 'Download' }
		     })
		     .state('community', {
			 url: '/community',
			 templateUrl: 'partials/community.html',
			 data: { pageTitle: 'Community' }
		     })
		     .state('code', {
			 url: '/community#code',
			 templateUrl: 'partials/community.html',
			 data: { pageTitle: 'Community' }
		     })
		     .state('ml', {
			 url: '/community#ml',
			 templateUrl: 'partials/community.html',
			 data: { pageTitle: 'Community' }
		     })
		     .state('social', {
			 url: '/community#social',
			 templateUrl: 'partials/community.html',
			 data: { pageTitle: 'Community' }
		     })
		     .state('related', {
			 url: '/community#related',
			 templateUrl: 'partials/community.html',
			 data: { pageTitle: 'Community' }
		     })
		     .state('credits', {
			 url: '/credits',
			 templateUrl: 'partials/credits.html',
			 data: { pageTitle: 'Credits' }
		     });
	     }]);
