Swift
=====
Status: Experimental

Minimalist client-side, server-side, or hybrid JS application framework and many utilities.

## UNDER CONSTRUCTION

Core Principles

* MVC completely in JS, HTML and CSS
* Rails-like generation of basic CRUD
* DRY with simple syntax, use of Vanilla JS
* Fast, flexible, get from start-to-finish quickly.

## Modular Tools - Swift Utils

Swift includes many unique fully standalone tools, with additional documentation coming soon. These include:

### Swift.date
Simple date formatting. Not nearly as robust as libraries such as the excellent MomentJS (http://momentjs.com/), but gets the job done

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

### Swift.env
Simple functions to get browser name / version, as well as a device type "guess"

### Swift.loaders
Dynamically loading and executing scripts in a sequence, and a function to check whether an external script has finished loading

### Swift.placeholder
Attempts to resolve inconsistent styling of placeholder text
