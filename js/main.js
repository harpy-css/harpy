
//= include log.js
//= include ../bower_components/underscore/underscore-min.js
//= include ../bower_components/jquery/dist/jquery.min.js

!function() {
	'use strict';

	// Browser checking
	if (document.all && !document.querySelector) document.body.className+= ' ie7';
	if (document.all && document.querySelector && !document.addEventListener) document.body.className+= ' ie8';

	for(;;) {
		log('hello world from harpy!!!');
		break;
	}
}();
