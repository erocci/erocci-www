/*global angular */

'use strict';

angular.module('erocciApp.directives', []).
    directive('title', [
	'$rootScope', '$timeout',
	function($rootScope, $timeout) {
	    return {
		link: function() {
		    
		    var listener = function(_event, toState) {
			
			$timeout(function() {
			    $rootScope.title = (toState.data && toState.data.pageTitle) 
				? toState.data.pageTitle 
				: 'Welcome';
			});
		    };
		    
		    $rootScope.$on('$stateChangeSuccess', listener);
		}
	    };
	}
    ]);
