
//= include ../bower_components/underscore/underscore-min.js
//= include ../bower_components/jquery/dist/jquery.min.js

!function() {
	'use strict';

	// Browser checking
	if (document.all && !document.querySelector) document.body.className+= ' ie7';
	if (document.all && document.querySelector && !document.addEventListener) document.body.className+= ' ie8';

	if (typeof jQuery == 'undefined') {
    throw new Error("Can't find jQuery. Type 'bower install' in terminal to install.");
	}

	var Harpy = {
			init: function() {
				$('.mobile-menu__icon').click(function() {
					Harpy.menu();
				});
			},
			menu: function() {
				$('nav').slideToggle();
			},
	};

	Harpy.init();


}();
