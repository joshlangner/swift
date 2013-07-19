/*  
	Swift.getScripts 1.0
 	By @JoshLangner

	REQUIRES:
	jQuery 2+

	Loads multiple Javascript files in a specific order, then executes a callback on completion.

	Example: 
	Swift.getScripts([
		'scripts/script-a.js',
		'scripts/script-b.js'
	], function() {
		alert('done!')
	})
*/
;Swift.getScripts = function(o, callback) {
	var i = 0;
	check();
	function check() {
		$.when(getScript(o[i])).then(function() {
			if (i < o.length-1) {					
				poll()
			} else {
				callback();
			}
		})
	}

	function poll() {
		i++;
		check();
	}

	function getScript(s) {
		return $.getScript(s);
	}
	
}

/*  
	Swift.xternal 0.8 beta
 	By @JoshLangner

	Checks for existence of object that is loaded by outside-domain library defined in a
	HTML <script> tag. Examples: Google maps, Typekit, etc.
	Params = [Function to execute when object is ready], [object to check], [timeout in ms]
*/
;Swift.xternal = function(callback, obj, t) {
	var timeout = 10000, 
		callback = callback;

	poll();	

	function poll() {
		setTimeout(function() {
			timeout = timeout - 500;
			check();
		}, 1000) // high; should be made configurable
	}
	function check() {

		if ((typeof eval(obj)) !== 'undefined' && obj !== 'xternal' && (typeof eval(obj)) !== 'string') {
			callback();
			return false;
		} else if (timeout > 0) {
			poll();
		} else {
			return false;
		}
	}
};