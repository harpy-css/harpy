
//= include ../bower_components/underscore/underscore-min.js
//= include ../bower_components/jquery/dist/jquery.min.js

!function() {
	'use strict';

	// Browser checking
	if (document.all && !document.querySelector) document.body.className+= ' ie7';
	if (document.all && document.querySelector && !document.addEventListener) document.body.className+= ' ie8';

	var Harpy = {
			init: function() {
				console.log('hello world from harpy!!!');

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
