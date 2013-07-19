/* 
	Swift Effects 1.0
 	By @JoshLangner 

	Simple effects for improved UX
*/
;Swift.fade = function(o) {
	/* 
		Swift.fade() gracefully fades all elements in or out
		options: 
		o.opacity: 1, 0
		future:
		o.direction: left, right, up, down
	*/

	// set defaults
	var o = o || {};
	o.direction = o.direction || 'in',
	o.opacity = o.opacity || 1,
	o.speed = o.speed || 'normal',
	o.element = o.element || "swift_fadeable",
	o.callback = o.callback || function() {};

	if (o.speed == 'normal') {
		o.speed = 75
	} else if (o.speed == 'fast') {
		o.speed = 10
	} else if (o.speed == 'slow') {
		o.speed = 150
	}

	var elements = $('.'+o.element),
	elements_length = elements.length;

	if (o.direction == 'in') {
		$(elements).each(function(i) {
			var element = $(this);
			window.setTimeout(function() {
				$(element).css('opacity', o.opacity)
			}, 200+(i*o.speed));
		})
		window.setTimeout(function() {
			o.callback()
		}, 300+(1*elements_length*o.speed))
	} 
	if (o.direction == 'out') {
		elements = $(elements).get().reverse();
		$(elements).each(function(i) {
			var element = $(this);
			window.setTimeout(function() {
				$(element).css('opacity', 0)
			}, 200+(i*o.speed));
		})
		window.setTimeout(function() {
			o.callback()
		}, 300+(1*elements_length*o.speed))

	}
	
}