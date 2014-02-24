Swift
=====
Minimalist client-side, server-side, or hybrid JS application framework and many utilities.

### Core Principles

* MVC completely in JS, HTML and CSS
* Rails-like generation of basic CRUD
* DRY with simple syntax, use of Vanilla JS
* Fast, flexible, get from start-to-finish quickly.

### Dependencies

Swift is designed to be as independent as possible, but some external utilities occasionally get used. These may include:

* jQuery
* Underscore.js (or Lo-dash)

## Documentation: Swift Utils


### Swift.elementquery
Provides a "media query" capability for elements, designed for use with responsive layouts.

Usage:
```javascript
// call once as part of your document readystate
Swift.elementquery.init({
	containers: '.myClassName', // class name of container(s) you want to watch / query
	classprevix: 'myclass-prefix', // previx of responsive classes that will get added to containers
	debounce: 100 // delay before function is fired, included so you can make adjustments per your app
});
```

### Swift.loaders
Dynamically loading and executing scripts in a sequence, and a function to check whether an external script has finished loading

Usage:
```javascript
// get local scripts in a specific order
Swift.getScripts([
	'scripts/script-a.js',
	'scripts/script-b.js'
], function() {
	alert('done!'); // fires when last script is loaded
});

// get external script by looking for known object in external script
Swift.getExternalScript({
	callback: myCallback(), // callback to fire on complete
	object: $, // object to check for, in this case looking for the jQuery object
	timeout: 10000, // maximum time to wait
	interval: 1000, // polling interval. If you know your script will load faster, set this lower to minimize wait
	error: myErrorCallback // callback function to handle case where timeout is not long enough
}); 
```

### Swift.numbers
Two functions to shorten numbers. One in a "#,###" format, and the other will convert 100000000 into "100m" for easier fitting into tight design spaces

Usage:
```javascript
var n = 54189013415.098943178391;
Swift.num.format('#,##0.',num); // outputs 54,189,013,415
Swift.num.format('#,##0.#',num); // outputs 54,189,013,415.1
Swift.num.format('#,##0.###',num); // outputs 54,189,013,415.099

Swift.num.short(n); // outputs 54.1b
```

### Swift.effects
An effects collection. Initial function is a cascading effects function, which triggers an effect across a number of elements in a sequence

Usage:
```javascript
// example coming soon
```

### Swift.env
Simple functions to get browser name / version, as well as a device type "guess"

Usage:
```javascript
// example coming soon
```

### Swift.placeholder
Resolves inconsistent styling of placeholder text in many cases

Usage:
```javascript
// example coming soon
```

### Swift.date
Simple date formatting. Not nearly as robust as libraries such as the excellent MomentJS (http://momentjs.com/), but gets the job done

Usage:
```javascript
// example coming soon
```
