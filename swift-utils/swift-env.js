/* 	
	Swift.env 1.0
 	By @JoshLangner 

	Get info about an environment, e.g. browser / device
*/
;Swift.env = {

	// get the browser info
	browser: function() {

		var browserName = navigator.appName, 
			userAgent = navigator.userAgent, 
			tem;

		var browser = userAgent.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
		if (browser && (tem = userAgent.match(/version\/([\.\d]+)/i)) != null) browser[2]= tem[1];
		browser = browser? [browser[1], browser[2]]: [browserName, navigator.appVersion, '-?'];

		return browser;
	},

	// GUESS a device type based on various criteria
	device: function() {
		/* General Matrix:
			up to 480 ------------------- Phone
			768 to 979 ------------------ Tablet or landscape Phone
			greater than 980 ------------ Desktop or landscape Tablet
		*/
		var width = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
		var device = 'oops'; // assume desktop by default

		if (width <= 480) {
			device = 'phone';
		} else if (width >= 768 && width <= 979) {
			device = 'tablet';
		} else if (width >= 980) {
			device = 'desktop';
		}
		return device;
	}
};