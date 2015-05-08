var log = function(args) {
	console.log(args);
}

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
