/* 	
	Swift.shortenNumber 1.0
 	By @JoshLangner

	Custom number function that makes varieties of numbers
	more legible for presentation, such as 10m, 1.2k, etc.
*/
;Swift.shortenNumber = function(n) {

	var m = Math.log(n) / Math.log(10);

	function round(num) {
		var base = Math.round(num) + '';
		if (base.length < 2) {
			num = num.toFixed(1);
		} else {
			num = Math.round(num);
		}
		return num;
	}
	
	if (m >= 3 && m < 6) {
		n = round(n/1000)+'k';
	}
	if (m >= 6 && m < 9) {
		n = round(n/1000000)+'m';
	}
	if (m >= 9 && m < 12) {
		n = round(n/1000000000)+'b';
	}
	if (m >= 12 && m < 15) {
		n = round(n/1000000000000)+'t';
	}
	if (m >= 15 && m < 18) {
		n = round(n/1000000000000000)+'q';
	}
	return n;
};

/*
	 IntegraXor Web SCADA - JavaScript Number Formatter
	 http://www.integraxor.com/
	 author: KPL, KHL
	 (c)2011 ecava
	 Dual licensed under the MIT or GPL Version 2 licenses.
*/
;Swift.formatNumber = function(b,a) {
	if(!b||isNaN(+a))return a;var a=b.charAt(0)=='-'?-a:+a,j=a<0?a=-a:0,e=b.match(/[^\d\-\+#]/g),h=e&&e[e.length-1]||'.',e=e&&e[1]&&e[0]||',',b=b.split(h),a=a.toFixed(b[1]&&b[1].length),a=+a+'',d=b[1]&&b[1].lastIndexOf('0'),c=a.split('.');if(!c[1]||c[1]&&c[1].length<=d)a=(+a).toFixed(d+1);d=b[0].split(e);b[0]=d.join('');var f=b[0]&&b[0].indexOf('0');if(f>-1)for(;c[0].length<b[0].length-f;)c[0]='0'+c[0];else+c[0]==0&&(c[0]='');a=a.split('.');a[0]=c[0];if(c=d[1]&&d[d.length-1].length){for(var d=a[0],f='',k=d.length%c,g=0,i=d.length;g<i;g++)f+=d.charAt(g),!((g-k+1)%c)&&g<i-c&&(f+=e);a[0]=f}a[1]=b[1]&&a[1]?h+a[1]:'';return(j?'-':'')+a[0]+a[1]
};