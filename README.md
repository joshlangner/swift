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


### Swift.elementQuery
Provides a "media query" capability for elements, designed for use with responsive layouts.

Usage:
```javascript
// example coming soon
```

### Swift.loaders
Dynamically loading and executing scripts in a sequence, and a function to check whether an external script has finished loading

Usage:
```javascript
// example coming soon
```

### Swift.numbers
Two functions to shorten numbers. One in a "#,###" format, and the other will convert 100000000 into "100m" for easier fitting into tight design spaces

Usage:
```javascript
var n = 54189013415.098943178391;
Swift.formatNumber('#,##0.',num); // outputs 54,189,013,415
Swift.formatNumber('#,##0.#',num); // outputs 54,189,013,415.1
Swift.formatNumber('#,##0.###',num); // outputs 54,189,013,415.099
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
