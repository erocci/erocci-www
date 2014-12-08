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
		templateUrl: 'partials/main.html',
		data: { pageTitle: 'Home' }
	    })
	    .state('getstarted', {
		url: '/getstarted',
		templateUrl: 'partials/getstarted.html',
		data: { pageTitle: 'Getting Started' }
	    })
	    .state('reference', {
		url: '/devref',
		templateUrl: 'partials/devref.html',
		data: { pageTitle: 'Developer Reference' }
	    })
	    .state('ref_model', {
		url: '/devref#model',
		templateUrl: 'partials/devref.html',
		data: { pageTitle: 'Developer Reference' }
	    })
	    .state('ref_capabilities', {
		url: '/devref#capabilities',
		templateUrl: 'partials/devref.html',
		data: { pageTitle: 'Developer Reference' }
	    })
	    .state('ref_http', {
		url: '/devref#http',
		templateUrl: 'partials/devref.html',
		data: { pageTitle: 'Developer Reference' }
	    })
	    .state('ref_xmpp', {
		url: '/devref#xmpp',
		templateUrl: 'partials/devref.html',
		data: { pageTitle: 'Developer Reference' }
	    })
	    .state('ref_dbus', {
		url: '/devref#dbus',
		templateUrl: 'partials/devref.html',
		data: { pageTitle: 'Developer Reference' }
	    })
	    .state('ref_listener', {
		url: '/devref#listener',
		templateUrl: 'partials/devref.html',
		data: { pageTitle: 'Developer Reference' }
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
	    })
	;
    });
