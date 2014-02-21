/* 
	Swift.elementquery 1.0
 	By @JoshLangner 
 	
	REQUIRES:
	jQuery 1.9+
	Underscore.js

 	"Media queries" for elements. Adds breakpoint classes to containers
*/
;Swift.elementquery = {

	init: function (o) {
		_.debounce(function () {
			Swift.elementquery.update(o);
		}, o.debounce || 100)
	};

	update: function (o) {
		options = options || { containers: 'elementstowatch', classprefix: 'swift-elem', debounce: 100 }
		
		// array of sizes to define
		var sizesList = [4096, 3840, 2880, 2560, 2048, 1920, 1600, 1280, 1080, 1024, 960, 768, 640, 480, 320];
		
		$(containers).each(function() {
			var $container = $(this);

			// get current container class, if set
			var oldContainerWidth = $container.attr('data-elem-width')*1 || 0, 
			
			// get actual container width
			var containerWidth = $container.width();

			// check if container is even visible or has width
			if (containerWidth > 0) {
				for (var i = 0; i < sizesList.length; i++) {
					if (oldContainerWidth >= sizesList[i] && oldContainerWidth <= sizesList[i-1]) {
						$element.removeClass(classprefix+'-'+oldContainerWidth)
							.attr('data-elem-width', sizesList[i])
							.addClass(classprefix+'-'+sizesList[i]);
					}
				}
			}

		});
	};
}