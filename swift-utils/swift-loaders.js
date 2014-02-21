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
	Swift.xternal 0.9
 	By @JoshLangner

	Checks for existence of object that is loaded by outside-domain library defined in a
	HTML <script> tag. Examples: Google maps, Typekit, etc.
	Params = [Function to execute when object is ready], [object to check], [timeout in ms]
*/
;Swift.getExternalScript = function(o) {
	var o = o || { callback: null, object: null, timeout: 10000, interval: 1000, error: function(){ return false } };
	poll();
	function poll() {
		setTimeout(function() {
			o.timeout = o.timeout - 500;
			check();
		}, o.interval);
	}
	function check() {
		if ((typeof eval(o.object)) !== 'undefined' && o.object !== 'getExternalScript' && (typeof eval(o.object)) !== 'string') {
			o.callback();
			return false;
		} else if (o.timeout > 0) {
			poll();
		} else {
			o.error();
		}
	}
};