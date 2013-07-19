/*  
	Swift.placeholder 1.0
	By @joshlangner

	REQUIRES:
	jQuery 1.9+

	Placeholder override since the current HTML spec doesn't work properly.
	Still allows developers to follow proper convention in using "placeholder="
	as they write HTML. This function can be removed in the future when spec
	works properly.
*/
;Swift.placeholder = function(f) {
	var f = $(f); // set jQuery object
	if ($.isArray(f)) {
		$(f).each(function(field) {
			initialize(field)
		})
	} else {
		initialize(f)
	}

	function initialize(f) {
		if ($(f).attr('placeholder')) {
			$(f).attr('data-placeholder', $(f).attr('placeholder')).removeAttr('placeholder');
		}

		var phText = $(f).attr('data-placeholder');

		function set() {
			if ($(f).val() == '') {
				$(f).addClass('empty').val(phText);
			} else if ($(f).val() != phText) {
				$(f).removeClass('empty');
			}
		}
		
		set();

		$(f).on('blur', function() {
			set();
		})

		$(f).on('focus', function() {
			if ($(f).val() == phText) {
				$(f).removeClass('empty').val('')
			} else {
			}
		})

	}	
}