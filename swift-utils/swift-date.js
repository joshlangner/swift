/* 
	Swift.date 1.0
 	By @JoshLangner 
 	
 	Simple date formatting function
*/
;Swift.date = function(d,options) {
	var date,
		specificTime = '';
	if (d == 'today') {
		date = new Date();
	} else if (d) {
		date = new Date(d);
	}
	var day = date.getDay(),
		month = date.getMonth(),
		year = date.getFullYear(),
		day_names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	if (options == 'time') {
		var hours = date.getHours(), 
			minutes = date.getMinutes(), 
			seconds = date.getSeconds();

		if (minutes*1 < 10) { minutes = '0' + minutes }
		if (seconds*1 < 10) { seconds = '0' + seconds }

		specificTime = ' at ' + hours + ':' + minutes + ':' + seconds;
	}

	return day_names[day] + ', ' + month_names[month] + ' ' + date.getDate() + ', ' + year + specificTime;
	
};